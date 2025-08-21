import "../Css/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Muhammad Ammar Saleem</h1>
      </div>
      <div className="hero-content">
        <h2 className="content-l1">Computer Scientist | Front-End Developer</h2>
        <h2 className="content-l2">
          On my Journey to Create Masterpieces - World's Best
        </h2>
      </div>
      <div className="hero-buttons">
        <button className="hero-btn1">{"</>"} View My Projects</button>
        <button className="hero-btn2">Contact Me</button>
      </div>
    </div>
  );
}
