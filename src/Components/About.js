import "../Css/About.css";
import pfp from "../img/profile_picture.jpg";
export default function About() {
  return (
    <div className="about">
      <div className="pfp-border">
        <div className="pfp">
          <img src={pfp} alt="pfp not loading" height={650} />
        </div>
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
          <div className="acheivement">
            <div className="achievement-heading">
              <div className="bullet"></div>
              <h2>Cambridge GCE O'Levels @ Beaconhouse (2019-2021)</h2>
            </div>
            <div>
              <p>Result: 8 A* & 1 A • Medal for academic excellence</p>
            </div>
          </div>
          <div className="acheivement">
            <div className="achievement-heading">
              <div className="bullet"></div>
              <h2>
                Cambridge GCE A'Levels @ Cadet College Hasanabdal (2021-2023)
              </h2>
            </div>
            <div>
              <p>Result: 3 A* & 1 A • Vice President Computer Club</p>
            </div>
          </div>
          <div className="acheivement">
            <div className="achievement-heading">
              <div className="bullet"></div>
              <h2>B.Sc. (CS) @ GIKI (2023-2027)</h2>
            </div>
            <div>
              <p id="last">
                Current CGPA: 3.50 • Dean's List of Honours x2 (Fall 2023 &
                Spring 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
