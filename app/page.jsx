import ScrollLinked from "./PageProgress";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";

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
