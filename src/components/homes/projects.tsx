import { Code } from "lucide-react"
import { getProjectsByType } from "@/data/projects"
import { ProjectCard, ProjectCTA } from "@/components/ui/project-client-components"

const Projects = () => {
  const liveProjects = getProjectsByType('live')
  const privateProjects = getProjectsByType('private')
  const backendProjects = getProjectsByType('backend')

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

        {/* Live Projects Section */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
              🚀 Live Projects
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Production Applications
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Currently deployed and serving real users in production environments
            </p>
          </div>
          <div className="space-y-8 lg:space-y-12">
            {liveProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Private Projects Section */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
              🔒 Private Projects
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Enterprise & Client Work
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Confidential projects developed for enterprise clients and organizations
            </p>
          </div>
          <div className="space-y-8 lg:space-y-12">
            {privateProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Backend Projects Section */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              ⚙️ Backend APIs
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              Backend Systems & APIs
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Scalable backend systems with RESTful APIs, databases, and intelligent features
            </p>
          </div>
          <div className="space-y-8 lg:space-y-12">
            {backendProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ProjectCTA />
      </div>
    </section>
  )
}

export default Projects
