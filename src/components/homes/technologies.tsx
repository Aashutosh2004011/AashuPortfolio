// app/components/Technologies.tsx
'use client'

import { useState } from 'react'
import { Code, Database, Cloud, Server, Palette, Globe } from 'lucide-react'

interface Technology {
  name: string
  category: string
  icon: string
  proficiency: number
  experience: string
  color: string
}

const Technologies = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const technologies: Technology[] = [
    // Frontend
    { name: 'Angular', category: 'Frontend', icon: '🅰️', proficiency: 90, experience: '3+ years', color: 'from-red-500 to-red-600' },
    { name: 'React.js', category: 'Frontend', icon: '⚛️', proficiency: 95, experience: '3+ years', color: 'from-blue-400 to-blue-500' },
    { name: 'Next.js', category: 'Frontend', icon: '▲', proficiency: 92, experience: '2+ years', color: 'from-gray-700 to-black' },
    
    // Styling
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', proficiency: 95, experience: '2+ years', color: 'from-teal-400 to-blue-500' },
    { name: 'Bootstrap', category: 'Styling', icon: '🅱️', proficiency: 88, experience: '3+ years', color: 'from-purple-500 to-purple-600' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', icon: '🟢', proficiency: 90, experience: '3+ years', color: 'from-green-500 to-green-600' },
    { name: 'FastAPI', category: 'Backend', icon: '⚡', proficiency: 85, experience: '2+ years', color: 'from-emerald-500 to-teal-500' },
    { name: 'Fastify', category: 'Backend', icon: '🚀', proficiency: 80, experience: '1+ years', color: 'from-gray-600 to-gray-700' },
    
    // ORM/Database Tools
    { name: 'Sequelize', category: 'ORM', icon: '🔗', proficiency: 85, experience: '2+ years', color: 'from-blue-600 to-indigo-600' },
    { name: 'Sequelize TS', category: 'ORM', icon: '🔷', proficiency: 83, experience: '2+ years', color: 'from-blue-500 to-blue-700' },
    { name: 'SQLAlchemy', category: 'ORM', icon: '🐍', proficiency: 80, experience: '2+ years', color: 'from-yellow-500 to-orange-500' },
    { name: 'Prisma', category: 'ORM', icon: '🔺', proficiency: 88, experience: '1+ years', color: 'from-indigo-500 to-purple-500' },
    
    // Databases
    { name: 'MySQL', category: 'Database', icon: '🐬', proficiency: 90, experience: '3+ years', color: 'from-orange-500 to-orange-600' },
    { name: 'MSSQL', category: 'Database', icon: '🏢', proficiency: 85, experience: '2+ years', color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', category: 'Database', icon: '🍃', proficiency: 88, experience: '2+ years', color: 'from-green-600 to-green-700' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', proficiency: 87, experience: '2+ years', color: 'from-blue-500 to-indigo-500' },
    
    // DevOps & Cloud
    { name: 'Docker', category: 'DevOps', icon: '🐳', proficiency: 85, experience: '2+ years', color: 'from-blue-500 to-cyan-500' },
    { name: 'AWS Cloud', category: 'DevOps', icon: '☁️', proficiency: 82, experience: '2+ years', color: 'from-orange-400 to-yellow-500' },
    { name: 'Kubernetes', category: 'DevOps', icon: '☸️', proficiency: 75, experience: '1+ years', color: 'from-blue-600 to-purple-600' },
  ]

  const categories = ['All', 'Frontend', 'Styling', 'Backend', 'ORM', 'Database', 'DevOps']

  const filteredTechnologies = activeFilter === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend': return <Globe className="h-5 w-5" />
      case 'Styling': return <Palette className="h-5 w-5" />
      case 'Backend': return <Server className="h-5 w-5" />
      case 'ORM': return <Code className="h-5 w-5" />
      case 'Database': return <Database className="h-5 w-5" />
      case 'DevOps': return <Cloud className="h-5 w-5" />
      default: return <Code className="h-5 w-5" />
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
            💻 Technologies & Tools
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to build modern, scalable applications.
            Each represents hands-on experience in real-world projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
              }`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className={`px-2 py-1 bg-gradient-to-r ${tech.color} bg-opacity-20 rounded-full text-xs font-medium text-white`}>
                    {tech.category}
                  </div>
                </div>

                {/* Technology Name */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {tech.name}
                </h3>

                {/* Experience */}
                <p className="text-gray-400 text-sm mb-4">
                  {tech.experience}
                </p>

                {/* Proficiency Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Proficiency</span>
                    <span className="text-xs font-medium text-gray-400">{tech.proficiency}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Hover Effect Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full animate-pulse`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {technologies.length}+
            </div>
            <div className="text-gray-400">Technologies Mastered</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {categories.length - 1}
            </div>
            <div className="text-gray-400">Specialization Areas</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-gray-400">Years of Experience</div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Technologies