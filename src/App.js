import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="App">
      <header>
        <section className="Navbar">
          <Navbar />
        </section>
        <section className="hero">
          <Hero />
        </section>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
