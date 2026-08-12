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
  phone: "+91 1234567890",
  location: "Kerala, India",
  languages: "English, Malayalam, Hindi",
  degree: "B.Tech",
  experienceYears: "1.5+ Years",
  githubUrl: "https://github.com/adhithyandas",
  linkedinUrl: "https://linkedin.com/in/adhithyan-das",
};

export const HERO_STATS = [
  { value: "1.5+", label: "Years Experience" },
  { value: "10+", label: "Projects" },
  { value: "Full Stack", label: "Developer" },
];

export const CODE_SNIPPET = `const developer = {
  name: "Adhithyan Das K",
  role: "Full Stack Developer",
  experience: "1.5+ Years",
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
  { label: "Experience", value: "1.5+ Years", iconName: "Briefcase" },
  { label: "Email", value: "adhithyandask@gmail.com", iconName: "Mail" },
  { label: "Degree", value: "B.Tech", iconName: "GraduationCap" },
  { label: "Location", value: "Kerala, India", iconName: "MapPin" },
  {
    label: "Languages",
    value: "English, Malayalam, Hindi",
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
    title: "Web Development",
    description:
      "Building responsive, accessible and high-performance web applications using modern technologies.",
    iconName: "Code",
  },
  {
    id: "serv-2",
    title: "Backend Development",
    description:
      "Designing scalable APIs and reliable server-side systems with clean architecture.",
    iconName: "Server",
  },
  {
    id: "serv-3",
    title: "Real-time Solutions",
    description:
      "Implementing real-time features such as chat, live sessions and notifications.",
    iconName: "Zap",
  },
  {
    id: "serv-4",
    title: "Cloud & DevOps",
    description:
      "Deploying, monitoring and scaling applications using AWS and CI/CD best practices.",
    iconName: "Cloud",
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "Contact", href: "#contact" },
];
