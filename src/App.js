import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <header>
        <section className="Navbar">
          <Navbar />
        </section>
        <section className="Hero">
          <Hero />
        </section>
      </header>
      <main>
        <section className="About">
          <About />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
