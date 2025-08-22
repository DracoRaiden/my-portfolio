import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <header id="Home">
        <section className="Navbar">
          <Navbar />
        </section>
        <section className="Hero">
          <Hero />
        </section>
      </header>
      <main>
        <section className="About" id="about-us">
          <About />
        </section>
        <section className="Projects" id="my-projects">
          <Projects />
        </section>
        <section id="contact-us">
          <Contact />
        </section>
      </main>
      <footer>&copy; 2025 Muhammad Ammar Saleem. A Masterpiece Display.</footer>
    </div>
  );
}

export default App;
