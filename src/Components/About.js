import "../Css/About.css";
import pfp from "../img/profile_picture.jpg";
export default function About() {
  return (
    <div className="about">
      <div className="pfp">
        <img src={pfp} alt="pfp not loading" height={650} />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I'm Muhammad Ammar Saleem, a Computer Science student at GIK Institute
          with a strong interest in problem-solving, data analytics, and
          software development. Skilled in C++, Python, JavaScript, React, and
          tools like Power BI and R, I enjoy building efficient
          solutions—whether it's designing algorithms, creating web
          applications, or analyzing data to uncover insights. Alongside
          academics, I stay active in sports, contribute to community
          initiatives, and continuously challenge myself with projects that
          blend creativity and technology. Driven by curiosity and resilience,
          I'm always looking for opportunities to learn, grow, and make a
          positive impact.
        </p>
        <div className="academics">
          <div className="acheivement-1"></div>
          <div className="acheivement-2"></div>
          <div className="acheivement-3"></div>
        </div>
      </div>
    </div>
  );
}
