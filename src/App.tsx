import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Skills } from "./components/Skills";
import { CoreExpertise } from "./components/CoreExpertise";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] selection:bg-[#38BDF8] selection:text-[#0B1120] font-sans antialiased">
      <Navbar />

      {/* Main Content Sections in Exact Page Order */}
      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Featured Projects */}
        <FeaturedProjects />

        {/* 6. Skills / Tech Stack */}
        <Skills />

        {/* 7. Core Expertise */}
        <CoreExpertise />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
