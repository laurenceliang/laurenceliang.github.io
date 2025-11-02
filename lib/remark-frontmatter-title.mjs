import { visit } from 'unist-util-visit';

export function remarkFrontmatterTitle() {
  return (tree, file) => {
    let frontmatter = {};

    // Find the frontmatter (yaml node)
    visit(tree, 'yaml', (node) => {
      const yaml = node.value;
      const titleMatch = yaml.match(/title:\s*(.+)/);
      const dateMatch = yaml.match(/date:\s*(.+)/);

      if (titleMatch) {
        frontmatter.title = titleMatch[1].trim();
      }
      if (dateMatch) {
        frontmatter.date = dateMatch[1].trim();
      }
    });

    // If we found a title in frontmatter, inject it with optional date
    if (frontmatter.title) {
      // Find the first non-frontmatter node
      let insertIndex = 0;
      for (let i = 0; i < tree.children.length; i++) {
        if (tree.children[i].type !== 'yaml') {
          insertIndex = i;
          break;
        }
      }

      const nodesToInsert = [];

      // Insert the title as an h1
      nodesToInsert.push({
        type: 'heading',
        depth: 1,
        children: [{ type: 'text', value: frontmatter.title }],
      });

      // Insert the date as a paragraph with custom styling if it exists
      if (frontmatter.date) {
        nodesToInsert.push({
          type: 'paragraph',
          data: {
            hProperties: {
              className: ['text-sm', 'text-zinc-500', 'dark:text-zinc-400', 'mb-8', '-mt-4']
            }
          },
          children: [{ type: 'text', value: frontmatter.date }],
        });
      }

      // Insert all nodes at the beginning
      tree.children.splice(insertIndex, 0, ...nodesToInsert);
    }
  };
}