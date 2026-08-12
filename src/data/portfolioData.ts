import {
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  ServiceItem,
  InfoDetail,
} from "../types";

export const PERSONAL_INFO = {
  name: "Adhithyan Das K",
  initials: "AD",
  title: "Full Stack Developer",
  eyebrow: "FULL STACK DEVELOPER",
  heroDescription:
    "I build scalable web applications and real-time experiences using modern technologies. Focused on clean code, performance and great user experience.",
  aboutHeading: "I build clean, scalable solutions.",
  aboutParagraph1:
    "I'm a Full Stack Developer with 1.5+ years of experience building web and mobile applications. I enjoy turning complex problems into simple, beautiful and intuitive solutions.",
  aboutParagraph2: "I love clean code, system design and continuous learning.",
  email: "adhithyandask@gmail.com",
  phone: "+91 7306291434",
  location: "Kerala, India",
  languages: "English, Malayalam",
  degree: "B.Tech",
  experienceYears: "2+ Years",
  githubUrl: "https://github.com/adhithyandas",
  linkedinUrl: "https://www.linkedin.com/in/adhithyan-das-k",
  xUrl: "https://x.com/adhithyandask",
  whatsappUrl: "https://wa.me/917306291434",
};

export const HERO_STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "Full Stack", label: "Developer" },
];

export const CODE_SNIPPET = `const developer = {
  name: "Adhithyan Das K",
  role: "Full Stack Developer",
  experience: "2+ Years",
  focus: ["Clean Code", "Performance", "User Experience"],
  tech: {
    frontend: ["React", "Next.js", "TypeScript"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "Redis"],
    cloud: ["AWS"],
    tools: ["Docker", "Git", "CI/CD"]
  }
};

console.log(developer);`;

export const ABOUT_INFO: InfoDetail[] = [
  { label: "Experience", value: "2+ Years", iconName: "Briefcase" },
  { label: "Email", value: "adhithyandask@gmail.com", iconName: "Mail" },
  {
    label: "Degree",
    value: "Bachelor of Computer Application - BCA",
    iconName: "GraduationCap",
  },
  { label: "Location", value: "Kerala, India", iconName: "MapPin" },
  {
    label: "Languages",
    value: "English, Malayalam",
    iconName: "Languages",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "Elance (YC W25)",
    duration: "Jan 2025 – Present",
    highlights: [
      "Building scalable admin panels and APIs for a global edtech platform.",
      "Implemented real-time features using Socket.IO and Redis.",
      "Integrated AWS services including S3, EC2 and CloudWatch.",
      "Working with React, Next.js, Node.js, MongoDB and related technologies.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS",
      "Socket.IO",
      "Docker",
    ],
  },
  {
    id: "exp-2",
    role: "SDE Intern",
    company: "Elance (YC W25)",
    duration: "May 2024 – Dec 2024",
    highlights: [
      "Developed features and REST APIs using Node.js and Express.",
      "Worked on React components and optimized application performance.",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Git", "AWS"],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Elance Aggregator",
    description:
      "Aggregation platform for tutors and students with live classes and scheduling.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.IO"],
  },
  {
    id: "proj-2",
    title: "Elance Admin",
    description:
      "Admin panel to manage users, tutors, subscriptions and platform analytics.",
    technologies: ["React", "TypeScript", "MUI", "Redux"],
  },
  {
    id: "proj-3",
    title: "Elance Mobile (Tutor)",
    description:
      "Mobile application for live sessions, content management and communication.",
    technologies: ["React Native", "Redux", "Socket.IO"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS / Tailwind CSS",
      "Material UI",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Socket.IO",
      "JWT Authentication",
      "Serverless (AWS Lambda)",
    ],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "Redis", "PostgreSQL (Prisma)"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, IAM, Lambda)",
      "CloudWatch, SNS, SQS",
      "API Gateway",
      "Docker",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      "Git & GitHub",
      "Postman / Swagger",
      "Jest / Vitest",
      "React Testing Library",
      "Sentry",
      "VS Code",
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Full Stack Development",
    description:
      "Designing and developing scalable web applications across frontend and backend systems. Building responsive interfaces, reliable APIs, authentication flows, and data-driven features. Focused on maintainable code and consistent application architecture.",
    iconName: "Code",
  },
  {
    id: "serv-2",
    title: "Architecture & System Design",
    description:
      "Designing application architecture, service boundaries, APIs, data flows, and integrations. Applying system design principles for scalability, reliability, maintainability, and extensibility. Choosing practical technologies and patterns for production systems.",
    iconName: "Server",
  },
  {
    id: "serv-3",
    title: "Security & Reliability",
    description:
      "Implementing secure authentication, authorization, validation, and protected application flows. Applying secure coding practices, error handling, logging, and dependency management. Focused on building reliable systems with production-ready safeguards.",
    iconName: "Zap",
  },
  {
    id: "serv-4",
    title: "Performance & Scalability",
    description:
      "Optimizing frontend performance, APIs, database operations, caching, and application workflows. Designing systems that can scale with increasing users, traffic, and data volume. Focused on efficient resource usage, responsiveness, and reliable performance.",
    iconName: "Cloud",
  },
  {
    id: "serv-5",
    title: "Integrations & Distributed Systems",
    description:
      "Integrating third-party services, external APIs, cloud services, and real-time communication systems. Working with asynchronous workflows, event-driven features, queues, and service integrations. Building dependable connections between internal and external systems.",
    iconName: "Database",
  },
  {
    id: "serv-6",
    title: "Code Quality, Testing & AI",
    description:
      "Writing clean, modular, testable code with consistent engineering and development practices. Using automated testing, code reviews, observability, and debugging to improve software quality. Leveraging AI tools responsibly to accelerate development, problem-solving, and engineering workflows.",
    iconName: "Activity",
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Expertise", href: "#expertise" },
  { name: "Contact", href: "#contact" },
];
