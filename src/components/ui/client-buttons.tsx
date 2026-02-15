"use client"

import { ArrowRight, Download, ChevronRight } from 'lucide-react'

interface ViewWorkButtonProps {
  onClick?: () => void
}

export const ViewWorkButton = ({ onClick }: ViewWorkButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      window.open('https://github.com/Aashu-king', '_blank')
    }
  }

  return (
    <button
      className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
      onClick={handleClick}
    >
      View My Work
      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
    </button>
  )
}

interface DownloadCVButtonProps {
  pdfPath?: string
}

export const DownloadCVButton = ({ pdfPath = '/AashutoshResume-2.pdf' }: DownloadCVButtonProps) => {
  const handleDownload = () => {
    window.open(pdfPath, '_blank')
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-full font-medium text-gray-300 hover:text-white transition-all duration-200 hover:bg-gray-800/50"
    >
      <Download className="mr-2 h-4 w-4" />
      Download CV
    </button>
  )
}

interface ScrollToSectionButtonProps {
  sectionId: string
  children: React.ReactNode
  className?: string
}

export const ScrollToSectionButton = ({ sectionId, children, className = '' }: ScrollToSectionButtonProps) => {
  const handleClick = () => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

interface ProjectDetailButtonProps {
  isExpanded: boolean
  onClick: () => void
}

export const ProjectDetailButton = ({ isExpanded, onClick }: ProjectDetailButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 rounded-full text-gray-300 hover:text-white font-medium transition-all duration-200 hover:bg-gray-800/50"
    >
      <ChevronRight
        className={`w-4 h-4 mr-2 transition-transform ${isExpanded ? "rotate-90" : ""}`}
      />
      Details
    </button>
  )
}