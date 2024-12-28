import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="about-container">
        <About />
      </div>
      <div className="skills-container">
        <Skills />
      </div>
      <Projects />
      <div className="exp-layout">
        <div className="exp-container">
          <Experience />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
