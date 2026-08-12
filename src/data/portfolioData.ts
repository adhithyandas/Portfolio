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
    role: "MERN Stack Developer",
    company: "Elance Learning",
    duration: "Jan 2025 – Jun 2026",
    highlights: [
      "Developed and maintained multiple production web applications and backend services.",
      "Built and maintained admin and faculty platforms end-to-end.",
      "Developed APIs, database models, authentication, real-time functionality, and third-party integrations.",
      "Contributed across the full software development lifecycle, including requirements analysis, application and database design, development, testing, deployment, and maintenance.",
      "Collaborated with senior engineers and QA on code reviews, PRs, testing, debugging, and releases.",
      "Worked in an Agile/Scrum environment using Jira.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Go",
      "Node.js",
      "Express.js",
      "Fastify",
      "MongoDB",
      "Redis",
      "AWS",
      "Socket.IO",
      "Axios",
      "TanStack Query",
      "Zustand",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Daily.co",
      "TPStream",
      "MSG91",
      "SendGrid",
      "Jira",
    ],
  },
  {
    id: "exp-2",
    role: "MERN Stack Developer Intern",
    company: "Luminar Technolab",
    duration: "Apr 2024 – Dec 2024",
    highlights: [
      "Developed full-stack web applications using React, Node.js, Express.js, and MongoDB.",
      "Built a real-time chat application with authentication and authorization, real-time messaging, profile management, image uploads, search, and protected routes.",
      "Developed a Project Management System with authentication, authorization, project CRUD operations, profile management, protected routes, and theme switching.",
      "Developed and integrated REST APIs, database operations, file uploads, and frontend-backend communication.",
      "Built responsive interfaces using React Context API, React Router, Tailwind CSS, and Bootstrap.",
      "Contributed to debugging, code improvements, feature development, and application testing throughout the development lifecycle.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Bcrypt",
      "Socket.IO",
      "Multer",
      "Axios",
      "React Context API",
      "React Router",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Elant Learning",
    category: "AI-DRIVEN Learning Platform",
    description:
      "AI-driven learning platform for ACCA, CMA, and CA students with structured courses, live sessions, study materials, exams, forums, challenges, and real-time communication.",
    technologies: [
      "React",
      "Next.js",
      "Go",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
    ],
  },
  {
    id: "proj-2",
    title: "Elance Connect",
    category: "Academic Platform",
    description:
      "Academic management and communication platform for students and parents, covering schedules, exams, mentor bookings, batch enrollment, progress tracking, and announcements.",
    technologies: ["Next.js", "Node.js", "Fastify", "MongoDB", "AWS", "Vercel"],
  },
  {
    id: "proj-3",
    title: "Elance Learning",
    category: "Learning Platform",
    description:
      "Online learning platform for professional finance programs, providing video courses, study materials, announcements, and structured content management for administrators and faculty.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "TPStream",
    ],
  },
  {
    id: "proj-4",
    title: "Elance Job Portal",
    category: "Job Platform",
    description:
      "Job application platform that enables users to browse available opportunities, view job details, submit applications, and upload resumes through a streamlined recruitment workflow.",
    technologies: [
      "HTML5",
      "Firebase",
      "Firestore",
      "Firebase Storage",
      "Firebase Hosting",
    ],
  },
  {
    id: "proj-5",
    title: "CMS Platform",
    category: "CMS",
    description:
      "Full-stack content management platform for managing courses, blog posts, images, and contact submissions through a dedicated admin dashboard.",
    technologies: ["Next.js", "Express.js", "MongoDB", "Vercel", "Render"],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Frontend",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "HTML5 & CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "JWT",
      "RBAC",
      "Third-Party API Integration",
      "Firebase",
    ],
  },
  {
    category: "Database & Caching",
    skills: ["MongoDB & Mongoose", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (S3, Lambda, IAM, API Gateway, CloudWatch, SQS, SNS, EventBridge)",
      "Docker",
      "Vercel",
      "Render",
      "CI/CD",
    ],
  },
  {
    category: "Engineering & Architecture",
    skills: [
      "Git & GitHub",
      "Postman",
      "Swagger / OpenAPI",
      "draw.io",
      "MVC Architecture",
      "Microservices",
      "System Design",
      "API Design",
      "Performance Optimization",
      "Security",
    ],
  },
  {
    category: "Testing, Quality & Monitoring",
    skills: ["Jest", "Vitest", "React Testing Library", "Sentry"],
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
