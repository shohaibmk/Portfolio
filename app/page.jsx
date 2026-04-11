import ScrollLinked from "./components/pageProgress.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Research from "./components/research.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";

export default function Home() {
  return (
    <div className="lg:px-12 py-6 bg-[#173333]">
      <ScrollLinked />
      <AboutMe />
      <Education />
      <Experience />
      <Research />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
