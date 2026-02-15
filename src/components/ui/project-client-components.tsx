"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronRight, ArrowUpRight, Server, Database, Code2, Zap, ChevronLeft } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

const BackendVisual = ({ projectId }: { projectId: number }) => {
  const apiEndpoints = projectId === 9
    ? [
        { method: "POST", path: "/api/tasks", color: "text-green-400" },
        { method: "GET", path: "/api/tasks", color: "text-blue-400" },
        { method: "GET", path: "/api/tasks/:id", color: "text-blue-400" },
        { method: "PATCH", path: "/api/tasks/:id", color: "text-yellow-400" },
        { method: "DELETE", path: "/api/tasks/:id", color: "text-red-400" },
      ]
    : [
        { method: "GET", path: "/api/deals", color: "text-blue-400" },
        { method: "GET", path: "/api/wishlist", color: "text-blue-400" },
        { method: "POST", path: "/api/wishlist", color: "text-green-400" },
        { method: "DELETE", path: "/api/wishlist/:id", color: "text-red-400" },
      ]

  return (
    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8 flex flex-col justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
            <Server className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">RESTful API</h3>
            <p className="text-gray-400 text-sm">Production-Ready Endpoints</p>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="space-y-3">
          {apiEndpoints.map((endpoint, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600 rounded-lg transition-all duration-300 backdrop-blur-sm"
            >
              <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${endpoint.color} bg-gray-900/50`}>
                {endpoint.method}
              </span>
              <code className="text-sm text-gray-300 font-mono flex-1">{endpoint.path}</code>
              <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-2 text-gray-400">
            <Database className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-medium">PostgreSQL</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-medium">TypeScript</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-xs font-medium">Express.js</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">Production Ready</span>
        </div>
      </div>
    </div>
  )
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageError = (imageSrc: string) => {
    if (!failedImages.has(imageSrc)) {
      setFailedImages((prev) => new Set([...prev, imageSrc]))
    }
  }

  const getProjectEmoji = (id: number) => {
    const emojiMap: { [key: number]: string } = {
      1: "🏢",
      2: "✈️",
      3: "📋",
      4: "🛒",
      5: "📝",
      6: "🌐",
      7: "🏥",
      8: "💰",
      9: "🤖",
      10: "🔧",
    }
    return emojiMap[id] || "💼"
  }

  const hasMultipleImages = project.imageUrls && project.imageUrls.length > 1
  const imageUrl = project.imageUrls && project.imageUrls.length > 0 ? project.imageUrls[currentImageIndex] : null
  const isEven = index % 2 === 0

  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % project.imageUrls.length)
    }
  }

  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev - 1 + project.imageUrls.length) % project.imageUrls.length)
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:scale-[1.02] ${
        isEven
          ? "border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-800/30"
          : "border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/30"
      }`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:grid-cols-2" : ""}`}>
        {/* Image/Visual Section */}
        <div className={`relative ${!isEven ? "lg:order-2" : ""}`}>
          {project.projectType === 'backend' ? (
            // Backend project: Show API visualization
            <BackendVisual projectId={project.id} />
          ) : imageUrl ? (
            // Regular project with image
            <div className="relative bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-6 h-full flex items-center justify-center">
              <div className="relative w-full">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain transition-all duration-500 rounded-lg shadow-lg"
                  priority={project.id <= 2}
                  onError={() => handleImageError(imageUrl)}
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

              {/* Image Navigation Controls */}
              {hasMultipleImages && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-full text-white transition-all duration-200 z-10 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 hover:bg-gray-800 border border-gray-700 rounded-full text-white transition-all duration-200 z-10 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {project.imageUrls.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-blue-500 w-8"
                            : "bg-gray-500 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900/80 border border-gray-700 rounded-full text-white text-sm font-medium z-10">
                    {currentImageIndex + 1} / {project.imageUrls.length}
                  </div>
                </>
              )}
            </div>
          ) : (
            // Fallback for projects without images
            <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl lg:text-8xl mb-4 opacity-50">{getProjectEmoji(project.id)}</div>
                <p className="text-gray-400">Project Preview</p>
              </div>
            </div>
          )}
          {project.projectType !== 'backend' && !hasMultipleImages && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          )}
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
            {project.techHighlights.map((highlight, idx: number) => (
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
            {project.tags.map((tag, idx: number) => (
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
                {project.keyFeatures.map((feature, idx: number) => (
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
}

interface ProjectCTAProps {
  onContactClick?: () => void
}

export const ProjectCTA = ({ onContactClick }: ProjectCTAProps) => {
  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="text-center mt-20">
      <div className="p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-3xl">
        <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities and interesting projects. Let&apos;s build something
          amazing together!
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
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-full text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-gray-800/50"
          >
            Get In Touch
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
