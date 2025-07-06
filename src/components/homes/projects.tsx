/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useCallback } from "react"
import { ExternalLink, Github, Code, Database, Server, Globe, ChevronRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

  const projects = [
    {
      id: 1,
      title: "Onyo",
      category: "Admin Panel",
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
      description:
        "Modern travel booking platform with real-time communication features, lightning-fast search capabilities, and seamless content management built with Next.js and powered by Strapi CMS.",
      shortDescription:
        "Developed a comprehensive travel website with real-time chat support, optimized destination search, and cloud-based media management for enhanced user experience.",
      imageUrls: ["/Yolidayh.png", "/yolidayi.png"],
        tags: ["Next.js", "Ably", "MeiliSearch", "Strapi", "AWS S3", "TypeScript", "Tailwind CSS",
        "ReactHook Forms"
        ],
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
      id: 3,
      title: "CRM System",
      category: "Full Stack Web App",
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
        { icon: <Code className="w-4 h-4" />, text: "Angular SPA with Bootstrap UI" },
        { icon: <Server className="w-4 h-4" />, text: "Node.js/Express.js REST APIs" },
        { icon: <Database className="w-4 h-4" />, text: "MSSQL database with optimized queries" },
      ],
      impact: "Streamlined customer management process for business teams, reducing data entry time by 60%",
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "Full Stack Application",
      description:
        "High-performance e-commerce website with FastAPI backend, featuring secure payments, inventory management, and admin dashboard.",
      shortDescription:
        "Developed a scalable e-commerce platform with FastAPI and React, focusing on performance and security.",
      imageUrls: [
        "/ecommerce.png",
      ],
      tags: ["React", "FastAPI", "MySQL", "SQLAlchemy", "Pydantic"],
      keyFeatures: [
        "Product catalog with advanced filtering",
        "Secure JWT-based authentication",
        "Payment gateway integration",
        "Admin panel for inventory management",
        "Order tracking and management",
      ],
      techHighlights: [
        { icon: <Code className="w-4 h-4" />, text: "React with responsive design" },
        { icon: <Server className="w-4 h-4" />, text: "FastAPI with Pydantic validation" },
        { icon: <Database className="w-4 h-4" />, text: "SQLAlchemy ORM with MySQL" },
      ],
      impact: "Achieved 300ms average API response time with efficient database queries and caching",
    },
    {
      id: 5,
      title: "Task Management System",
      category: "Team Collaboration Tool",
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
        { icon: <Code className="w-4 h-4" />, text: "TypeScript for type safety" },
        { icon: <Server className="w-4 h-4" />, text: "WebSocket real-time updates" },
        { icon: <Database className="w-4 h-4" />, text: "Optimized MSSQL queries" },
      ],
      impact: "Improved team productivity by 45% through better task visibility and collaboration",
    },
    {
      id: 6,
      title: "Team PMC Website",
      category: "Business Website",
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
        { icon: <Code className="w-4 h-4" />, text: "Angular with component architecture" },
        { icon: <Server className="w-4 h-4" />, text: "Node.js with Sequelize ORM" },
        { icon: <Globe className="w-4 h-4" />, text: "SEO optimization & performance" },
      ],
      impact: "Enabled real-time content updates, reducing website maintenance time by 70%",
    },
    {
      id: 7,
      title: "Travel & Healthcare Websites",
      category: "Client Projects",
      description:
        "Multiple static websites for different industries including travel (Char Dham) and healthcare (Oxygen Healthcare).",
      shortDescription:
        "Developed responsive static websites for travel and healthcare clients with focus on performance and SEO.",
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
        { icon: <Code className="w-4 h-4" />, text: "Semantic HTML5 structure" },
        { icon: <Server className="w-4 h-4" />, text: "CSS3 with Flexbox/Grid" },
        { icon: <Globe className="w-4 h-4" />, text: "Vanilla JS for interactivity" },
      ],
      impact: "Delivered 3+ client websites with 100% client satisfaction and improved online presence",
    },
  ]

  // Handle image error without infinite loop
  const handleImageError = useCallback(
    (imageSrc: string, fallbackElement: HTMLElement) => {
      if (!failedImages.has(imageSrc)) {
        setFailedImages((prev) => new Set([...prev, imageSrc]))
        // Hide the image and show fallback
        fallbackElement.style.display = "flex"
        const fallbackDiv = fallbackElement.nextElementSibling as HTMLElement
        if (fallbackDiv) {
          fallbackDiv.style.display = "flex"
        }
      }
    },
    [failedImages],
  )

  const getProjectEmoji = (id: number) => {
    const emojiMap: { [key: number]: string } = {
      1: "🏢",
      2: "✈️",
      3: "📋",
      4: "🛒",
      5: "📝",
      6: "🌐",
      7: "🏥",
    }
    return emojiMap[id] || "💼"
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            My Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise across full-stack development, from enterprise applications to client
            websites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project: any, index) => {
            const imageUrl = project.imageUrls && project.imageUrls.length > 0 ? project.imageUrls[0] : null
            const isEven = index % 2 === 0

            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
                  isEven
                    ? "border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30"
                    : "border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/30"
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:grid-cols-2" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
                    {imageUrl ? (
                      <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-6 h-full flex items-center justify-center">
                        <div className="relative w-full">
                          <Image
                            src={imageUrl || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg shadow-lg"
                            priority={project.id <= 2}
                            onError={(e) => handleImageError(imageUrl, e.currentTarget)}
                          />
                          {/* Fallback content */}
                          <div
                            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg"
                            style={{ display: failedImages.has(imageUrl) ? "flex" : "none" }}
                          >
                            <div className="text-center">
                              <div className="text-6xl mb-4 opacity-50">{getProjectEmoji(project.id)}</div>
                              <p className="text-gray-400 text-sm">Project Preview</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-6 h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl lg:text-8xl mb-4 opacity-50">{getProjectEmoji(project.id)}</div>
                          <p className="text-gray-400">Project Preview</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                    {/* Category */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4 w-fit">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.shortDescription}</p>

                    {/* Tech Highlights */}
                    <div className="space-y-3 mb-6">
                      {project.techHighlights.map((highlight: any, idx: number) => (
                        <div key={idx} className="flex items-center text-gray-400">
                          <span className="text-blue-400 mr-3">{highlight.icon}</span>
                          <span className="text-sm">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Impact */}
                    <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl mb-6">
                      <div className="flex items-start">
                        <ArrowUpRight className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-green-400 text-sm font-medium">{project.impact}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag: any, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-200 transform hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-full text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-gray-800/50"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                        className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-full text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-gray-800/50"
                      >
                        <ChevronRight
                          className={`w-4 h-4 mr-2 transition-transform ${selectedProject === project.id ? "rotate-90" : ""}`}
                        />
                        Details
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedProject === project.id && (
                      <div className="p-6 bg-gray-800/30 border border-gray-700 rounded-xl">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {project.keyFeatures.map((feature: any, idx: number) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <ChevronRight className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's build something amazing
              together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Aashu-king"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-200 transform hover:scale-105"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-full text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-gray-800/50"
              >
                Get In Touch
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
