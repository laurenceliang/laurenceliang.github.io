type Project = {
  name: string
  description: string
  link: string
  video?: string
  photo?: string
  id: string
  icon?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description?: string
  logo?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Environment Free Coding Benchmarks',
    description: 'Lead authored a new benchmark to evaluate LLM code understanding capabilities on 3,000+ questions derived from GitHub pull requests. Presented as a workshop paper at KnowFM at ACL 2025.',
    link: 'https://openreview.net/forum?id=Rny4QwVUYs',
    id: 'project-efcb',
    icon: 'Code2',
  },
  {
    name: 'Obstacle Detection using Radio Trasnsceivers on Drones',
    description: 'Obtained new state of the art results for obstacle detection with UWB radio waves using drones. Work done as an extension of MECH 498/499 with the DECAR Lab at McGill. Work under review at IEEE ICRA, available upon request.',
    link: '#',
    id: 'project-uwb',
    icon: 'Radio',
  },
  {
    name: 'Fine-Tuning Pi-Zero on a Piper Robot Arm',
    description: 'At the Zurich Builds hackathon, we fine-tuned the Pi-Zero VLA model on pick-and-place tasks for serving coffee.',
    link: 'https://www.youtube.com/watch?v=4begCgQFvEM',
    id: 'project-pi-zero',
    icon: 'Bot',
  },
  {
    name: 'State Space Model Distillation',
    description:
      'Distilling a 70M attention transformer into a Hyena 70M model. Accepted at ES-FoMo-II at ICML 2024.',
    link: 'https://arxiv.org/abs/2401.17574',
    // video:
      // 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    photo: '/img/hyena_figure.png',
    id: 'project1',
    icon: 'BrainCircuit',
  },
  {
    name: 'Self-Driving Car',
    description: 'Autonomous driving using vision inputs. Placed Top 24 at BFMC 2024 in Cluj-Napoca, Romania.',
    link: 'https://youtu.be/ccUA8U04yuI',
    // video:
      // 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0https://photos.app.goo.gl/FBBTXxY6wpLpMW9L8',
    photo: '/img/self-driving-car.png',
    id: 'project2',
    icon: 'Car',
  },
  {
    name: 'Underflow',
    description: '(PennApps 2024) Command line interface to estimate deployment costs for any GitHub repository.',
    link: 'https://github.com/stevensusas/Underflow',
    id: 'project3',
    icon: 'Terminal',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Cohere Labs',
    title: 'Community Member',
    start: '2026',
    end: 'Present',
    link: 'https://github.com/Cohere-Labs',
    id: 'work-cohere',
    description: 'Contributing to open source research on foundation models.',
    logo: 'https://github.com/Cohere-Labs.png',
  },
  {
    company: 'Rootly (YC S21) AI Labs',
    title: 'Member of Technical Staff',
    start: '2025',
    end: 'Present',
    link: 'https://rootly.ai',
    id: 'work1',
    description: 'Built LLM coding evals, accepted as workshop papers at ICML 2025, ACL 2025, and NeurIPS 2025.',
    logo: 'https://www.google.com/s2/favicons?domain=rootly.ai&sz=128',
  },
  {
    company: 'McGill (DECAR, SuPER, MAIS), UBC (PRIME)',
    title: 'Student Researcher',
    start: '2023',
    end: 'Present',
    link: '#',
    id: 'work1.1',
    description: 'Multi-drone obstacle detection, RL for path planning for medical manipulators. SSM distillation (ICML 2024 workshop paper), self-refinement for LLM toxicity detection (NAACL 2024 workshop paper), LLMs for misinformation detection (SMASH 2025).',
    logo: 'https://upload.wikimedia.org/wikipedia/en/2/29/McGill_University_CoA.svg',
  },
  {
    company: 'Groq',
    title: 'Intern (Evals)',
    start: '2025',
    end: '2025',
    link: 'https://groq.com',
    id: 'work2',
    description: 'Evaluation infrastructure. CI/CD, reproduced coding evals, and contributed to early releases for OpenBench.',
    logo: 'https://www.google.com/s2/favicons?domain=groq.com&sz=128',
  },
  {
    company: 'MDA Space',
    title: 'Intern (Robotics, on Canadarm 2, 3)',
    start: '2024',
    end: '2024',
    link: 'https://mda.space',
    id: 'work3',
    description: 'Control system optimization for the Candarm 3 in simulation, and 10x speedup for the visual similarity algorithm for Canadarm 2 debris detection.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/MDA_Ltd._Logo.svg',
  },
  {
    company: "ACSL Ltd",
    title: "Intern (Drone R&D)",
    start: "2022",
    end: "2022",
    link: "https://www.acsl.co.jp/en/",
    id: "work4",
    description: 'Neural nets for drone motor performance modeling at Japan\'s largest industrial drone manufacturer.',
    logo: 'https://www.google.com/s2/favicons?domain=acsl.co.jp&sz=128',
  },
  {
    company: "Perceive Now",
    title: "Data Scientist",
    start: "2021",
    end: "2023",
    link: "https://perceivenow.ai/",
    id: "work5",
    description: 'Developed v1 of the core API, contributed to the startup raising a 6-figure round with an $8.5M valuation.',
    logo: 'https://www.google.com/s2/favicons?domain=perceivenow.ai&sz=128',
  },
  {
    company: "Soulzone",
    title: "Backend Developer",
    start: "2019",
    end: "2019",
    link: "#",
    id: "work6",
    description: 'Joined a startup and worked on Backend & Apache Solr before starting CEGEP.',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYAJKRZZqepA/company-logo_200_200/company-logo_200_200/0/1631310969775?e=1779926400&v=beta&t=oFqBIrQCV9bDLWtSRl9qlpOsDOx96TDSFyLOWbAhsmg',
  },
  {
    company: "Expedia",
    title: "Software Developer (Apprentice Program)",
    start: "2018",
    end: "2018",
    link: "https://www.expedia.com",
    id: "work7",
    description: 'Full-stack app to estimate semantic similarity between web pages. ',
    logo: 'https://www.google.com/s2/favicons?domain=expedia.com&sz=128',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Opinionated Rules for Research',
    description: 'Guiding principles to quickstart research projects.',
    link: '/blog/rules_for_research',
    uid: 'blog-1',
  },
  {
    title: 'How Do Reasoning Models Work?',
    description: 'The big picture ideas behind reasoning models.',
    link: '/blog/reasoning_models',
    uid: 'blog-2',
  },
  {
    title: 'Multipliers',
    description: 'Things to do to increase output.',
    link: '/blog/multipliers',
    uid: 'blog-3',
  },
  {
    title: 'An Epsilon-Greedy Analogy for Producing Work',
    description: 'Breadth vs depth trade-offs.',
    link: '/blog/epsilon',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/TheFloatingString',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/LaurenceLiang1',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/laurence-liang-innovator',
  },
  {
    label: 'Substack',
    link: 'https://laurenceliang.substack.com',
  },
]

export const EMAIL = 'laurence.liang@mail.mcgill.ca'
