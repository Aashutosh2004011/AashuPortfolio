'use client'
import { useState } from 'react'
import { Calendar, MapPin, ChevronRight, Code, Database, Cloud, Users } from 'lucide-react'

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0)

  const experiences = [
    {
      id: 0,
      company: "Yoliday",
      position: "Full-Stack Developer Intern",
      duration: "2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "Developed high-performance web applications with modern React ecosystem and cloud infrastructure.",
      keyAchievements: [
        "Developed responsive, dynamic, and high-performance front-end interfaces using React.js and Next.js",
        "Leveraged advanced libraries such as TanStack Router, TanStack Query, TanStack Table and Material UI",
        "Built and maintained robust backend services using Node.js, Express.js, and FastAPI",
        "Integrated headless CMS like Strapi and implemented search capabilities using Meilisearch",
        "Deployed and managed applications using AWS for scalable cloud infrastructure and services"
      ],
      technologies: ["React.js", "Next.js", "TanStack", "Node.js", "Express.js", "FastAPI", "Strapi", "Meilisearch", "AWS", "Material UI"],
      highlights: [
        { icon: Code, text: "Component-driven architecture" },
        { icon: Database, text: "Headless CMS integration" },
        { icon: Cloud, text: "AWS deployment & management" },
        { icon: Users, text: "Cross-functional collaboration" }
      ]
    },
    {
      id: 1,
      company: "Varahi SoftTech",
      position: "Full-Stack Developer Intern",
      duration: "2023 - 2025",
      location: "On-site",
      type: "Internship",
      description: "Built scalable full-stack applications and gained comprehensive experience in modern web technologies.",
      keyAchievements: [
        "Developed responsive and user-friendly front-end interfaces using HTML, CSS, Bootstrap, JavaScript",
        "Built applications with Angular and React frameworks focusing on user experience",
        "Built and maintained scalable backend services with Node.js, Express.js, and FastAPI",
        "Designed and managed databases using MongoDB, MySQL, and MSSQL with Sequelize and Mongoose",
        "Implemented RESTful APIs for seamless data integration and optimized code performance"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Angular", "React", "Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "MSSQL", "Sequelize", "Mongoose"],
      highlights: [
        { icon: Code, text: "Frontend frameworks mastery" },
        { icon: Database, text: "Multi-database expertise" },
        { icon: Cloud, text: "RESTful API development" },
        { icon: Users, text: "Team collaboration" }
      ]
    }
  ]

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in software development, building scalable applications and working with cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Timeline */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-24">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  onClick={() => setActiveExperience(index)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    activeExperience === index
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-bold text-lg ${
                      activeExperience === index ? 'text-blue-400' : 'text-white'
                    }`}>
                      {exp.company}
                    </h3>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      activeExperience === index ? 'rotate-90 text-blue-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <p className="text-gray-300 font-medium mb-2">{exp.position}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experiences[activeExperience].position}
                    </h3>
                    <p className="text-xl text-blue-400 font-semibold mb-2">
                      {experiences[activeExperience].company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-2">
                      {experiences[activeExperience].type}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {experiences[activeExperience].duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {experiences[activeExperience].location}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {experiences[activeExperience].description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {experiences[activeExperience].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <highlight.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <span className="text-gray-300 font-medium">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {experiences[activeExperience].keyAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeExperience].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-sm text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">2.5+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-pink-400 mb-2">2</div>
            <div className="text-gray-300">Companies Worked With</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience