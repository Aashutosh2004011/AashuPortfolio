/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Send } from 'lucide-react';

const GetInTouch = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Aashu-king',
      color: 'hover:text-gray-300',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aashutosh-singh-560986274',
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/AashutoshS2004',
      color: 'hover:text-blue-400',
      description: 'Follow my updates'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:rajputaashutosh011@gmail.com',
      color: 'hover:text-red-400',
      description: 'Send me a message'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's connect and create something amazing together. I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300 ${link.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            );
          })}
        </div>

      
      </div>
    </div>
  );
};

export default GetInTouch;