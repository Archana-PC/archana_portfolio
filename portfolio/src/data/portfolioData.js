export const personalInfo = {
  name: "Archana Kumari",
  role: "Full-Stack Software Engineer · Python · Django · FastAPI · React · Next.js",
  status: "Available for Full-time Roles & High-Impact Engineering",
  email: "archanakumari.swe@gmail.com",
  phone: "+91-8340488397",
  location: "Bangalore, India",
  experienceYears: "2+",
  github: "https://github.com/Archana-PC",
  linkedin: "https://linkedin.com/in/archana-kumari",
  summary: "Full-Stack Software Engineer with 2+ years of experience building scalable, production-grade web platforms using Django, FastAPI, React and Next.js. Architected and developed completely from scratch full-scale E-Commerce management, real-time Inventory Management, and POS billing systems, alongside multi-tenant SaaS platforms, payment integrations (PhonePe), async backends (Celery, RabbitMQ, Redis), and AI features (OpenAI API). Focused on mission-critical software for real-world business operations."
};

export const stats = [
  {
    label: "Async Task Throughput",
    value: "10,000+ / Day",
    description: "Celery & RabbitMQ pipelines with zero data loss"
  },
  {
    label: "API Latency Reduction",
    value: "40% Faster",
    description: "Redis caching & PostgreSQL query optimizations"
  },
  {
    label: "Multi-Tenant Platform",
    value: "5,000+ Users",
    description: "Zero cross-tenant data leakage in production"
  },
  {
    label: "E-Com, Inventory & POS",
    value: "1,000+ SKUs",
    description: "Built from scratch: real-time stock sync & automated dispatch"
  }
];

export const skillsData = [
  {
    category: "Backend & Async",
    items: [
      { name: "Python", level: "Expert", desc: "Core Python, OOP, asynchronous programming, scripting" },
      { name: "Django & DRF", level: "Expert", desc: "Enterprise architecture, ORM, RESTful API design" },
      { name: "FastAPI", level: "Advanced", desc: "Async endpoints, Pydantic data schemas, high throughput" },
      { name: "Celery & RabbitMQ", level: "Advanced", desc: "Distributed task queues, background workers, AMQP" },
      { name: "Redis", level: "Advanced", desc: "In-memory caching, message broker, performance tuning" },
      { name: "Node.js & Express", level: "Intermediate", desc: "REST microservices, middleware, async event loop" }
    ]
  },
  {
    category: "Frontend & UI",
    items: [
      { name: "React", level: "Expert", desc: "Modern hooks, component lifecycle, custom hooks" },
      { name: "Next.js", level: "Advanced", desc: "Server-side rendering, App Router, static generation" },
      { name: "Redux Toolkit & RTK Query", level: "Expert", desc: "Predictable state, normalized cache, auto-refetching" },
      { name: "Formik & Yup", level: "Advanced", desc: "Dynamic multi-step forms, schema-based validation" },
      { name: "Tailwind CSS", level: "Expert", desc: "Responsive utility styling, custom UI systems, animations" },
      { name: "JavaScript (ES6+)", level: "Expert", desc: "Async/await, closures, functional patterns, DOM" }
    ]
  },
  {
    category: "Databases & DevOps",
    items: [
      { name: "PostgreSQL", level: "Advanced", desc: "Relational modeling, indexing, constraint enforcement, ACID" },
      { name: "MySQL", level: "Advanced", desc: "Schema design, joins, transaction management" },
      { name: "Firebase", level: "Advanced", desc: "Real-time notifications, event triggers, NoSQL" },
      { name: "MongoDB", level: "Advanced", desc: "Document collections, aggregation pipelines" },
      { name: "Docker & Compose", level: "Advanced", desc: "Containerization, multi-service development environments" },
      { name: "AWS Cloud & Nginx", level: "Intermediate", desc: "EC2, S3, reverse proxy, web server configuration" }
    ]
  },
  {
    category: "AI, APIs & Architecture",
    items: [
      { name: "OpenAI API", level: "Advanced", desc: "LLM integration, prompt engineering, semantic scoring" },
      { name: "Payment & Logistics APIs", level: "Advanced", desc: "PhonePe payment gateway, Ekart tracking integration" },
      { name: "CI/CD & GitHub Actions", level: "Advanced", desc: "Automated test suites, zero-downtime releases" },
      { name: "Microservices & Distributed Systems", level: "Advanced", desc: "Decoupled services, event-driven architecture" },
      { name: "JWT Auth & RBAC", level: "Expert", desc: "Role-based access control, session security, multi-role flows" },
      { name: "Git & Linux", level: "Expert", desc: "Version control, branching workflows, bash administration" }
    ]
  }
];

export const projectsData = [
  {
    id: "docsense",
    title: "AI Resume Screener & Candidate Intelligence",
    category: "Full Stack",
    image: "/src/assets/projects/docsense.jpg",
    summary: "4-service Django microservices application that automatically parses, scores, and ranks candidate resumes against job descriptions using OpenAI API with an asynchronous distributed queue.",
    metric: "4-Service Microservices + OpenAI Scorer",
    tags: ["Django", "FastAPI", "React", "Celery", "Redis", "PostgreSQL", "MongoDB", "Docker Compose", "OpenAI API"],
    highlights: [
      "Engineered 4-service microservices architecture parsing resumes and scoring relevance against job descriptions.",
      "Designed asynchronous pipeline with PDF parser, Celery worker pool, and Redis queues for concurrent processing.",
      "Integrated OpenAI API with optimized prompt engineering for deterministic scoring matrices and candidate ranking.",
      "Containerized all microservices with Docker Compose for one-command local and production setup."
    ],
    liveUrl: "https://github.com/Archana-PC/docsense-ai",
    githubUrl: "https://github.com/Archana-PC/docsense-ai"
  },
  {
    id: "brahmo",
    title: "Knowledge Graph System — Database-Level Immutability",
    category: "Backend / Cloud",
    image: "/src/assets/projects/brahmo.jpg",
    summary: "Append-only knowledge graph with PostgreSQL database-level immutability constraints, temporal SUPERSEDE node patterns, and complete cryptographic audit trails built with FastAPI and React.",
    metric: "Database-Level REVOKE Immutability",
    tags: ["Python 3.11", "FastAPI", "PostgreSQL", "Supabase", "React", "Vite", "Node.js"],
    highlights: [
      "Enforced strict PostgreSQL REVOKE privileges on DELETE/UPDATE to guarantee tamper-proof append-only integrity.",
      "Implemented temporal SUPERSEDE pattern allowing non-destructive updates while preserving historical audit states.",
      "Developed responsive React/Vite graph explorer interface with interactive sub-50ms node traversal.",
      "Engineered verification test suites validating rollback resilience and unauthorized mutation prevention."
    ],
    liveUrl: "https://github.com/Archana-PC/brahmo-data-integrity",
    githubUrl: "https://github.com/Archana-PC/brahmo-data-integrity"
  },
  {
    id: "cloudcommerce",
    title: "E-Commerce, Inventory Management & POS System",
    category: "Full Stack",
    image: "/src/assets/projects/auracommerce.jpg",
    summary: "Comprehensive platform built completely from scratch with Django and Next.js to manage end-to-end E-Commerce operations, real-time Inventory Management across 1,000+ SKUs, and retail POS billing with automated dispatch workflows.",
    metric: "Built From Scratch • 1,000+ SKUs • 10,000+ Tasks/Day",
    tags: ["Django", "Next.js", "Celery", "RabbitMQ", "Redis", "PostgreSQL", "PhonePe", "Ekart API"],
    highlights: [
      "Architected and engineered completely from scratch a unified E-Commerce management platform, POS billing system, and real-time inventory engine.",
      "Engineered real-time inventory synchronization tracking 1,000+ retail SKUs across multi-location franchises with automated low-stock alerts.",
      "Implemented Celery + RabbitMQ async workers handling 10,000+ daily orders, notifications, and stock updates with 0% data loss.",
      "Integrated PhonePe payment gateway with idempotent webhooks and Ekart logistics API for live parcel dispatch tracking.",
      "Optimized database indexing and multi-layer Redis caching layer to slash checkout API latency by 40% (sub-120ms P95)."
    ],
    liveUrl: "https://github.com/Archana-PC",
    githubUrl: "https://github.com/Archana-PC"
  },
  {
    id: "multitenantsaas",
    title: "Multi-Tenant Examination & SaaS Assessment Platform",
    category: "Full Stack",
    image: "/src/assets/projects/nexusflow.jpg",
    summary: "Scalable multi-tenant assessment platform serving 5,000+ active candidates with 3 difficulty tiers, isolated tenant databases preventing cross-tenant leakage, and RTK Query optimized caching.",
    metric: "5,000+ Active Users • Zero Tenant Leakage",
    tags: ["React", "Next.js", "Redux Toolkit", "RTK Query", "Formik", "Yup", "Tailwind CSS", "JWT / RBAC"],
    highlights: [
      "Architected multi-tenant SaaS application with strict schema and tenant isolation, guaranteeing 0% cross-tenant data leakage.",
      "Built dynamic examination runner with 3 difficulty tiers, timers, and automatic progress persistence.",
      "Engineered 15+ complex dynamic forms with Formik + Yup, reducing submission validation errors by 35%.",
      "Implemented RTK Query intelligent caching and deduping, eliminating 50% of redundant network roundtrips."
    ],
    liveUrl: "https://github.com/Archana-PC",
    githubUrl: "https://github.com/Archana-PC"
  },
  {
    id: "videostream",
    title: "StreamCore — Video Streaming & Transcoding Backend",
    category: "Backend / Cloud",
    image: "/src/assets/projects/videostream.jpg",
    summary: "High-performance video streaming backend platform featuring secure JWT & Cookie authentication, multi-part video uploads via Multer, Cloudinary storage integration, and paginated MongoDB aggregation pipelines.",
    metric: "Dynamic Video Transcoding & Chunked Ingestion",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "Cloudinary", "Multer"],
    highlights: [
      "Architected RESTful microservices for chunked video ingestion, watch history tracking, and channel subscriptions.",
      "Engineered complex MongoDB aggregation pipelines for high-throughput pagination, search, and recommendation feeds.",
      "Secured API endpoints with HMAC SHA-256 JWT refresh/access token rotation and bcrypt password hashing.",
      "Integrated resilient file upload middleware streaming directly to cloud object repositories."
    ],
    liveUrl: "https://github.com/Archana-PC/backend_javascript",
    githubUrl: "https://github.com/Archana-PC/backend_javascript"
  },
  {
    id: "soundify",
    title: "Soundify — Music Streaming & Audio Experience",
    category: "Frontend",
    image: "/src/assets/projects/soundify.jpg",
    summary: "Spotify-inspired interactive audio streaming web application built with React, Vite, and Tailwind CSS. Features dynamic playlist navigation, real-time playback controls, audio waveform animations, and modern dark aesthetics.",
    metric: "60 FPS Fluid Audio Player UI",
    tags: ["React", "Vite", "Tailwind CSS", "Web Audio API", "Lucide Icons", "JavaScript"],
    highlights: [
      "Built custom audio playback engine supporting play/pause, seek scrubbers, track progression, and volume attenuation.",
      "Crafted responsive glassmorphic UI styled with Tailwind CSS, supporting seamless navigation across desktop and mobile.",
      "Implemented stateful playlist queues and search filters for instant track discovery.",
      "Optimized DOM rendering with React component memoization, ensuring fluid UI animations during continuous audio playback."
    ],
    liveUrl: "https://github.com/Archana-PC/Soundify",
    githubUrl: "https://github.com/Archana-PC/Soundify"
  }
];

export const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Cloud Software Solution",
    period: "Nov 2025 — Present",
    type: "Full-Time",
    location: "Bangalore, India",
    achievements: [
      "Architected and engineered completely from scratch an enterprise E-Commerce management platform, real-time Inventory Management system, and POS billing engine (Django, Next.js).",
      "Engineered real-time inventory sync tracking 1,000+ retail SKUs across multi-location retail franchises with automated order-to-dispatch workflows.",
      "Built modular Franchise Management module and granular Role-Based Access Control (RBAC) ensuring secure, role-specific data access across multi-location franchise staff.",
      "Cut API response time by 40% (sub-120ms P95) via Redis caching and PostgreSQL compound indexing, accelerating checkout and inventory lookups.",
      "Designed Celery + RabbitMQ distributed worker pipelines handling 10,000+ daily background tasks (order notifications, stock updates, invoice generation) with 0% data loss.",
      "Integrated PhonePe payment gateway with idempotent webhook validation and automated reconciliation; integrated Ekart API for real-time parcel dispatch tracking.",
      "Automated deployments via CI/CD pipelines (GitHub Actions & Docker), achieving consistent zero-downtime releases."
    ]
  },
  {
    role: "Software Engineer",
    company: "Comestro Pvt Ltd",
    period: "Sept 2024 — Oct 2025",
    type: "Full-Time",
    location: "India",
    achievements: [
      "Owned full development of a scalable exam module (React + RTK Query) for an e-learning platform, with 3 difficulty tiers and 5,000+ active users.",
      "Architected multi-tenant SaaS platform with isolated data — zero cross-tenant leakage in production.",
      "Built 15+ dynamic forms with Formik + Yup, cutting submission errors by 35% and support tickets.",
      "Implemented JWT auth with role-based access control (RBAC) across frontend and backend, securing multi-role user flows.",
      "Optimised data fetching with RTK Query caching, cutting redundant API calls by 50% and improving page responsiveness."
    ]
  },
  {
    role: "Full Stack Intern",
    company: "Techjet.ai",
    period: "March 2024 — Aug 2024",
    type: "Internship",
    location: "India",
    achievements: [
      "Built secure auth flows (protected routes, sessions, JWT) across a React + Django application.",
      "Integrated 10+ REST APIs; managed global state with Redux Toolkit for consistent, complex UI flows.",
      "Built reusable React components, reducing code duplication by 40%."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Presidency College",
    period: "2021 — 2022",
    location: "Bangalore, India",
    details: "Advanced software engineering, distributed systems, and computer applications."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Purnea College",
    period: "2016 — 2020",
    location: "Purnea, India",
    details: "Foundational computer science, data structures, algorithms, and application development."
  }
];
