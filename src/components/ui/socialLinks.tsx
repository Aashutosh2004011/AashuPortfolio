import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react'

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Aashu-king',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aashutosh-singh-560986274',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/AashutoshS2004',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:rajputaashutosh011@gamil.com',
      color: 'hover:text-red-400'
    }
  ]

  return (
    <div className="flex items-center space-x-6">
      <span className="text-gray-400 text-sm">Connect with me:</span>
      <div className="flex space-x-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-gray-400 ${link.color} transition-all duration-200 transform hover:scale-110 group`}
              aria-label={link.name}
            >
              <Icon className="h-5 w-5" />
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 absolute translate-x-1 -translate-y-1 transition-opacity" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLinks
