"use client"
import SocialLinks from '@/components/ui/socialLinks'
import { ArrowRight, Download } from 'lucide-react'
import Image from 'next/image';

const Hero = () => {
  const handleDownloadCV = () => {
    window.open('/UpdatedResume.pdf', '_blank');
  };
  const viewMyWork = () => {
    window.open('https://github.com/Aashu-king', '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                👋 Welcome to my portfolio
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi, I am{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Aashutosh Singh
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 font-light">
                Full Stack Developer & Software Engineer
              </p>

              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                I craft exceptional digital experiences with modern technologies.
                Passionate about building scalable applications and turning ideas into reality.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
                onClick={viewMyWork}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 rounded-full font-medium text-gray-300 hover:text-white transition-all duration-200 hover:bg-gray-800/50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <SocialLinks />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2.5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl transform scale-110"></div>

              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-ping"></div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
                    <Image src={'/Profile2.png'} alt='Profile' width={370}  // Add required width
                      height={200} />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute bottom-10 -right-4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero