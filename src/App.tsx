import { useLenis } from "./lib/useLenis";
import MouseGlow from "./components/MouseGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import ResumeSection from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <div className="noise pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <MouseGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GithubStats />
        <Achievements />
        <Gallery />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
