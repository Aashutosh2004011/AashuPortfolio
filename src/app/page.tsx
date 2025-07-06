import About from "@/components/homes/about";
import Hero from "@/components/homes/hero";
import Projects from "@/components/homes/projects";
import Technologies from "@/components/homes/technologies";
import Experience from "@/components/homes/expirence";
import GetInTouch from "@/components/homes/getintouch";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Main landing area */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-800/50">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Technologies Section */}
      <section id="technologies">
        <Technologies />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-900/50">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <GetInTouch />
      </section>
    </div>
  );
}