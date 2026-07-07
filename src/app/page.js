import Contact from "./components/sections/Contact";
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Contact />

      {/* Your Portfolio */}
    </>
  );
}