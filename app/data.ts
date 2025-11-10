type Project = {
  name: string
  description: string
  link: string
  video?: string
  photo?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  description?: string
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
    name: 'State Space Model Distillation',
    description:
      'Distilling a 70M attention transformer into a Hyena 70M model. Accepted at ES-FoMo-II at ICML 2024.',
    link: 'https://arxiv.org/abs/2401.17574',
    // video:
      // 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    photo: '/img/hyena_figure.png',
    id: 'project1',
  },
  {
    name: 'Self-Driving Car',
    description: 'Autonomous driving using vision inputs. Placed Top 24 at BFMC 2024 in Cluj-Napoca, Romania.',
    link: 'https://youtu.be/ccUA8U04yuI',
    // video:
      // 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0https://photos.app.goo.gl/FBBTXxY6wpLpMW9L8',
    photo: '/img/self-driving-car.png',
    id: 'project2',
  },
  {
    name: 'Underflow',
    description: '(PennApps 2024) Command line interface to estimate deployment costs for any GitHub repository.',
    link: 'https://github.com/stevensusas/Underflow',
    id: 'project3',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Rootly (YC S21) AI Labs',
    title: 'Member of Technical Staff',
    start: '2025',
    end: 'Present',
    link: 'https://rootly.ai',
    id: 'work1',
    description: 'Built LLM coding evals, accepted as workshop papers at ICML 2025, ACL 2025, and NeurIPS 2025.'
  },
  {
    company: 'McGill (DECAR, SuPER, MAIS), UBC (PRIME)',
    title: 'Student Researcher',
    start: '2023',
    end: 'Present',
    link: '#',
    id: 'work1.1',
    description: 'Multi-drone obstacle detection, RL for path planning for medical manipulators. SSM distillation (ICML 2024 workshop paper), self-refinement for LLM toxicity detection (NAACL 2024 workshop paper), LLMs for misinformation detection (SMASH 2025).'
  },
  {
    company: 'Groq',
    title: 'Intern (Evals)',
    start: '2025',
    end: '2025',
    link: 'https://groq.com',
    id: 'work2',
    description: 'Evaluation infrastructure. CI/CD, reproduced coding evals, and contributed to early releases for OpenBench.'
  },
  {
    company: 'MDA Space',
    title: 'Intern (Robotics, on Canadarm 2, 3)',
    start: '2024',
    end: '2024',
    link: 'https://mda.space',
    id: 'work3',
    description: 'Control system optimization for the Candarm 3 in simulation, and 10x speedup for the visual similarity algorithm for Canadarm 2 debris detection.'
  },
  {
    company: "ACSL Ltd",
    title: "Intern (Drone R&D)",
    start: "2022",
    end: "2022",
    link: "https://www.acsl.co.jp/en/",
    id: "work4",
    description: 'Neural nets for drone motor performance modeling at Japan\'s largest industrial drone manufacturer.'
  },
  {
    company: "Perceive Now",
    title: "Data Scientist",
    start: "2021",
    end: "2023",
    link: "https://perceivenow.ai/",
    id: "work5",
    description: 'Developed v1 of the core API, contributed to the startup raising a 6-figure round with an $8.5M valuation.'
  },
  {
    company: "Soulzone",
    title: "Backend Developer",
    start: "2019",
    end: "2019",
    link: "#",
    id: "work6",
    description: 'Joined a startup and worked on Backend & Apache Solr before starting CEGEP.' 
  },
  {
    company: "Expedia",
    title: "Software Developer (Apprentice Program)",
    start: "2018",
    end: "2018",
    link: "https://www.expedia.com",
    id: "work7",
    description: 'Full-stack app to estimate semantic similarity between web pages. '
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
