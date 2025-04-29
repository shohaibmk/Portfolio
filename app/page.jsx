import ScrollLinked from "./PageProgress.jsx";
import AboutMe from "./AboutMe.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function Home() {
  return (
    <div className="lg:px-8 py-6">
      <ScrollLinked />
      <AboutMe />
      <div className=" grid grid-cols-1 lg:grid-cols-2">
        <Experience />
        <Education />
      </div>
    </div>
  );
}
