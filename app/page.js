import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import ProjectsPreview from "../components/home/ProjectsPreview";
import Community from "../components/home/Community";
import Certifications from "../components/home/Certifications";
import Contact from "../components/home/Contact";
import AIChatBox from "../components/chat/AIChatBox";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <ProjectsPreview />
      <Community />
      <Certifications />
      <Contact />
      <AIChatBox />
    </>
  );
}
