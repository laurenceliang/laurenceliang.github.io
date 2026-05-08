'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { PROJECTS } from '../data'
import { Code2, Radio, Bot, BrainCircuit, Car, Terminal } from 'lucide-react'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Radio,
  Bot,
  BrainCircuit,
  Car,
  Terminal,
}

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export default function ProjectsPage() {
  return (
    <motion.main
      className="not-prose mx-auto max-w-3xl space-y-8"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={VARIANTS_ITEM} transition={{ duration: 0.3 }}>
        <h1 className="mb-2 text-3xl font-medium">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Robots, machine learning, and more.
          <br />
          <i>Click on a project title for additional info.</i>
        </p>
      </motion.div>

      <motion.div
        variants={VARIANTS_ITEM}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                className="-mx-3 rounded-xl px-3 py-3 no-underline"
                href={project.link}
                data-id={project.id}
              >
                <div className="flex items-start gap-3">
                  {project.icon && (() => {
                    const Icon = ICON_MAP[project.icon]
                    return Icon ? (
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-800">
                        <Icon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                      </div>
                    ) : null
                  })()}
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-normal dark:text-zinc-100">
                      {project.name}
                    </h4>
                    <p className="font-normal text-zinc-500 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.div>
    </motion.main>
  )
}
