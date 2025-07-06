/* eslint-disable react/no-unescaped-entities */
import { Code, Users, GraduationCap, MapPin, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "2.5+ Years Experience",
      description: "Full-stack development with modern technologies"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led a team of 2 interns during internship"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Tech Computer Science",
      description: "Currently pursuing in Ahmedabad, Gujarat"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Based in Vapi",
      description: "Gujarat, India"
    }
  ]

  const techStack = [
    "Angular", "React.js", "Next.js", "Node.js", 
    "Express.js", "Fastify", "FastAPI", "JavaScript", "TypeScript"
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                Get to know me
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                About{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Aashutosh P Singh
                </span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a passionate Full Stack Developer from Vapi, Gujarat, currently pursuing my B.Tech in Computer Science in Ahmedabad. With over 2.5 years of hands-on experience in web development, I&apos;ve had the privilege of working with cutting-edge technologies and leading development teams.
                </p>
                
                <p>
                  During my internship, I took on the challenge of leading a team of two other interns, where I learned the importance of collaboration, mentorship, and delivering results under pressure. This experience shaped my approach to development - combining technical excellence with strong leadership skills.
                </p>
                
                <p>
                  My journey spans across both frontend and backend technologies, from crafting responsive user interfaces with React and Angular to building robust APIs with Node.js, Express, and FastAPI. I believe in writing clean, maintainable code and staying updated with the latest industry trends.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Philosophy */}
            <div className="p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">My Philosophy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "Code is not just about functionality; it&apos;s about creating solutions that make a difference. I strive to build applications that are not only robust and scalable but also intuitive and user-friendly."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About