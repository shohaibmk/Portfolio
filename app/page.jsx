import ScrollLinked from "./pageProgress.jsx";
import AboutMe from "./aboutMe.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import Research from "./research.jsx";

export default function Home() {
  return (
    <div className="lg:px-8 py-6">
      <ScrollLinked />
      <AboutMe />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Experience />
        <Education />
      </div>
      <Research />
    </div>
  );
}
