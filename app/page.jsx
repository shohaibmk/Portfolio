import ScrollLinked from "./components/pageProgress.jsx";
import AboutMe from "./components/aboutMe.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Research from "./components/research.jsx";
import Contact from "./components/contact.jsx";
import Footer from "./components/footer.jsx";
import Projects from "./components/projects.jsx";

export default function Home() {
  return (
    <div className="lg:px-8 py-6">
      <ScrollLinked />
      <AboutMe />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Experience />
        <Education />
      </div>
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}
