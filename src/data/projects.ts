export interface TechHighlight {
  icon: string
  text: string
}

export interface Project {
  id: number
  title: string
  category: string
  description: string
  shortDescription: string
  imageUrls: string[]
  tags: string[]
  keyFeatures: string[]
  techHighlights: TechHighlight[]
  impact: string
  liveUrl?: string
  githubUrl?: string
  projectType: 'live' | 'private' | 'backend'
}

export const projects: Project[] = [
  // LIVE PROJECTS
  {
    id: 1,
    title: "Onyo",
    category: "Admin Panel",
    projectType: "live",
    description:
      "Comprehensive admin panel with integrated real-time chat module, optimized data management, and advanced search capabilities built with modern React ecosystem and Strapi CMS.",
    shortDescription:
      "Built a feature-rich admin panel with integrated Ably chat module for real-time communication, optimized data handling, and streamlined content management.",
    imageUrls: ["/yolidaya.jpg", "/yolidayb.png", "/yolidayc.png", "/yolidayd.png"],
    tags: [
      "React.js",
      "TanStack Router",
      "TanStack Query",
      "TanStack Forms",
      "TanStack Table",
      "Ably",
      "Strapi",
      "MeiliSearch",
      "AWS S3",
    ],
    keyFeatures: [
      "Integrated real-time chat module with Ably",
      "Message pinning and thread management",
      "Online presence and active status tracking",
      "Image sharing via AWS S3 bucket",
      "Optimized data fetching with MeiliSearch",
      "Advanced table management with TanStack Table",
      "Seamless navigation with TanStack Router",
    ],
    techHighlights: [
      { icon: "⚛️", text: "React.js with TanStack ecosystem" },
      { icon: "💬", text: "Ably real-time chat module integration" },
      { icon: "🔍", text: "MeiliSearch for optimized data queries" },
      { icon: "☁️", text: "AWS S3 for secure media storage" },
      { icon: "🎛️", text: "Strapi headless CMS backend" },
    ],
    impact:
      "Streamlined admin operations with integrated communication features, improving team collaboration by 80% and reducing data management overhead through optimized search and real-time updates",
  },
  {
    id: 2,
    title: "Yoliday",
    category: "Travel Web Application",
    projectType: "live",
    description:
      "Modern travel booking platform with real-time communication features, lightning-fast search capabilities, and seamless content management built with Next.js and powered by Strapi CMS.",
    shortDescription:
      "Developed a comprehensive travel website with real-time chat support, optimized destination search, and cloud-based media management for enhanced user experience.",
    imageUrls: ["/Yolidayh.png", "/yolidayi.png"],
    tags: ["Next.js", "Ably", "MeiliSearch", "Strapi", "AWS S3", "TypeScript", "Tailwind CSS", "ReactHook Forms"],
    keyFeatures: [
      "Real-time customer support chat with Ably",
      "Lightning-fast destination and hotel search",
      "High-quality travel imagery via AWS S3",
      "Dynamic content management with Strapi",
      "Server-side rendering for optimal SEO",
      "Responsive design for all devices",
      "Secure booking and payment integration",
    ],
    techHighlights: [
      { icon: "⚡", text: "Next.js with SSR and SSG optimization" },
      { icon: "💬", text: "Ably real-time chat integration" },
      { icon: "🔍", text: "MeiliSearch for lightning-fast data queries" },
      { icon: "☁️", text: "AWS S3 for secure media storage" },
      { icon: "🎛️", text: "Strapi headless CMS backend" },
    ],
    impact:
      "Enhanced travel booking experience with 90% faster search results and real-time customer support, increasing user engagement by 65% and booking conversion rates by 40%",
  },
  {
    id: 6,
    title: "Team PMC Website",
    category: "Business Website",
    projectType: "live",
    description:
      "Dynamic business website with admin panel for content management, showcasing services and team information.",
    shortDescription: "Built a professional business website with dynamic content management and admin controls.",
    imageUrls: ["/teampmc.png"],
    tags: ["Angular", "Node.js", "Sequelize", "TypeScript", "MySQL"],
    liveUrl: "https://www.teampmc.in/",
    keyFeatures: [
      "Admin dashboard for content management",
      "Dynamic project showcases",
      "SEO-optimized structure",
      "Contact form integration",
      "Mobile-responsive design",
    ],
    techHighlights: [
      { icon: "⚛️", text: "Angular with component architecture" },
      { icon: "🔧", text: "Node.js with Sequelize ORM" },
      { icon: "🌐", text: "SEO optimization & performance" },
    ],
    impact: "Enabled real-time content updates, reducing website maintenance time by 70%",
  },
  {
    id: 7,
    title: "Char Dham Travel Website",
    category: "Client Website",
    projectType: "live",
    description:
      "Static travel website for Char Dham pilgrimage tours with focus on performance and SEO optimization.",
    shortDescription:
      "Developed responsive static website for travel client with focus on performance and SEO.",
    imageUrls: ["/chardhamwebsite-scaled.jpg"],
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    liveUrl: "https://thechardham.com",
    keyFeatures: [
      "Fully responsive layouts",
      "SEO-optimized content structure",
      "Fast loading performance",
      "Contact form integration",
      "Cross-browser compatibility",
    ],
    techHighlights: [
      { icon: "📝", text: "Semantic HTML5 structure" },
      { icon: "🎨", text: "CSS3 with Flexbox/Grid" },
      { icon: "⚡", text: "Vanilla JS for interactivity" },
    ],
    impact: "Delivered high-performance website with 100% client satisfaction and improved online presence",
  },
  {
    id: 8,
    title: "Buzdealz - Deal Tracking Platform",
    category: "Full Stack Web Application",
    projectType: "live",
    description:
      "Production-ready deal tracking platform with wishlist management, price alerts, and real-time notifications. Features role-based access control for subscribers and comprehensive analytics tracking.",
    shortDescription:
      "Built a complete deal tracking platform with wishlist management, subscriber features, and analytics using Next.js, Express, and Supabase.",
    imageUrls: ["/BuzDeal.png", "/BuzDeal2.png"],
    tags: ["Next.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Supabase Auth", "TypeScript", "Tailwind CSS", "React Query"],
    liveUrl: "https://wish-list-frontend-blue.vercel.app/",
    githubUrl: "https://github.com/Aashutosh2004011/WishList_frontend",
    keyFeatures: [
      "Real-time deal tracking and price monitoring",
      "Wishlist management with alert system",
      "Role-based access control (subscriber vs non-subscriber)",
      "Analytics tracking for user behavior",
      "Idempotent operations with unique constraints",
      "Edge case handling for expired/disabled deals",
      "Comprehensive error handling and validation",
    ],
    techHighlights: [
      { icon: "⚛️", text: "Next.js with Server Components" },
      { icon: "🔧", text: "Express.js RESTful API with Drizzle ORM" },
      { icon: "🗄️", text: "PostgreSQL with optimized queries" },
      { icon: "🌐", text: "Deployed on Vercel & Render" },
    ],
    impact: "Streamlined deal discovery process with 100% uptime, real-time alerts for subscribers, and comprehensive analytics for user engagement tracking",
  },

  // PRIVATE PROJECTS
  {
    id: 3,
    title: "CRM System",
    category: "Full Stack Web App",
    projectType: "private",
    description:
      "Enterprise-level Customer Relationship Management system with role-based access control and real-time data synchronization.",
    shortDescription:
      "Built a complete CRM platform for managing customer relationships with secure authentication and real-time updates.",
    imageUrls: ["/VarahiSoftTech-CRM-scaled.jpg"],
    tags: ["Angular", "Node.js", "Express.js", "MSSQL", "JWT"],
    keyFeatures: [
      "Role-based authentication & authorization",
      "Real-time data updates with WebSockets",
      "RESTful API architecture",
      "Automated lead tracking system",
      "Advanced reporting dashboard",
    ],
    techHighlights: [
      { icon: "⚛️", text: "Angular SPA with Bootstrap UI" },
      { icon: "🔧", text: "Node.js/Express.js REST APIs" },
      { icon: "🗄️", text: "MSSQL database with optimized queries" },
    ],
    impact: "Streamlined customer management process for business teams, reducing data entry time by 60%",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Full Stack Application",
    projectType: "private",
    description:
      "High-performance e-commerce website with FastAPI backend, featuring secure payments, inventory management, and admin dashboard.",
    shortDescription:
      "Developed a scalable e-commerce platform with FastAPI and React, focusing on performance and security.",
    imageUrls: ["/ecommerce.png"],
    tags: ["React", "FastAPI", "MySQL", "SQLAlchemy", "Pydantic"],
    keyFeatures: [
      "Product catalog with advanced filtering",
      "Secure JWT-based authentication",
      "Payment gateway integration",
      "Admin panel for inventory management",
      "Order tracking and management",
    ],
    techHighlights: [
      { icon: "⚛️", text: "React with responsive design" },
      { icon: "⚡", text: "FastAPI with Pydantic validation" },
      { icon: "🗄️", text: "SQLAlchemy ORM with MySQL" },
    ],
    impact: "Achieved 300ms average API response time with efficient database queries and caching",
  },
  {
    id: 5,
    title: "Task Management System",
    category: "Team Collaboration Tool",
    projectType: "private",
    description:
      "Comprehensive project management platform enabling teams to track tasks, manage deadlines, and collaborate in real-time.",
    shortDescription:
      "Created a team productivity tool with task assignment, progress tracking, and collaborative features.",
    imageUrls: ["/VarahiSoftTech-CRM-scaled.jpg"],
    tags: ["Angular", "Node.js", "TypeScript", "MSSQL", "WebSockets"],
    keyFeatures: [
      "Project-based task organization",
      "Real-time notifications system",
      "Team collaboration features",
      "Progress tracking dashboards",
      "Deadline management & alerts",
    ],
    techHighlights: [
      { icon: "📘", text: "TypeScript for type safety" },
      { icon: "🔌", text: "WebSocket real-time updates" },
      { icon: "🗄️", text: "Optimized MSSQL queries" },
    ],
    impact: "Improved team productivity by 45% through better task visibility and collaboration",
  },

  // BACKEND PROJECTS
  {
    id: 9,
    title: "Smart Task Manager - Backend API",
    category: "Backend API",
    projectType: "backend",
    description:
      "Production-ready Node.js + TypeScript backend for an intelligent task management system that automatically classifies and organizes tasks based on content analysis. Features intelligent auto-classification, RESTful API with CRUD operations, advanced filtering, pagination, task history tracking, and comprehensive security measures.",
    shortDescription:
      "Built an intelligent task management API with auto-classification, real-time updates, and comprehensive task tracking using Node.js, TypeScript, and PostgreSQL.",
    imageUrls: [],
    tags: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Supabase", "Zod", "Winston", "Jest"],
    githubUrl: "https://github.com/Aashutosh2004011/TaskManagement_Backend",
    keyFeatures: [
      "Intelligent auto-classification (category, priority, entities)",
      "5 core RESTful endpoints with full CRUD operations",
      "Advanced filtering by status, category, priority, and search",
      "Pagination & customizable sorting",
      "Complete task history audit trail",
      "Input validation using Zod schemas",
      "Rate limiting and security with Helmet",
      "Structured logging with Winston",
      "Unit tests for classification logic",
    ],
    techHighlights: [
      { icon: "🔧", text: "Node.js + TypeScript with Express.js" },
      { icon: "🗄️", text: "PostgreSQL/Supabase with optimized indexes" },
      { icon: "✅", text: "Zod validation & Winston logging" },
      { icon: "🌐", text: "Deployed on Render with 100% uptime" },
    ],
    impact: "Automated task classification reduced manual categorization by 90%, improved task visibility with comprehensive filtering, and enabled complete audit trail for compliance",
  },
  {
    id: 10,
    title: "Buzdealz - Backend API",
    category: "Backend API",
    projectType: "backend",
    description:
      "Production-ready Express backend for the Buzdealz deal tracking platform with wishlist management, deal alerts, and analytics. Features Supabase authentication, role-based access control, idempotent operations, and comprehensive error handling.",
    shortDescription:
      "Developed a scalable backend API for deal tracking with wishlist management, subscriber features, and analytics using Express.js, Drizzle ORM, and PostgreSQL.",
    imageUrls: [],
    tags: ["Express.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Supabase", "Zod", "Node.js"],
    liveUrl: "https://wishlist-backend-zn7m.onrender.com/health",
    githubUrl: "https://github.com/Aashutosh2004011/Wishlist_Backend",
    keyFeatures: [
      "RESTful API for deals and wishlist management",
      "Supabase authentication integration",
      "Role-based access control (subscriber features)",
      "Idempotent operations with unique constraints",
      "Analytics tracking for wishlist events",
      "Zod schema validation",
      "Edge case handling for expired/disabled deals",
      "Database migrations with Drizzle",
    ],
    techHighlights: [
      { icon: "🔧", text: "Express.js with TypeScript" },
      { icon: "🗄️", text: "Drizzle ORM with PostgreSQL" },
      { icon: "🔐", text: "Supabase Auth & Zod validation" },
      { icon: "🌐", text: "Production deployment on Render" },
    ],
    impact: "Enabled real-time deal tracking for users, reduced duplicate wishlist entries with idempotent operations, and provided comprehensive analytics for user behavior insights",
  },
]

export const getProjectsByType = (type: 'live' | 'private' | 'backend') => {
  return projects.filter(project => project.projectType === type)
}

export const getAllProjects = () => projects
