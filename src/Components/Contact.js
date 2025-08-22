import "../Css/Contact.css";
import resume from "../docs/Resume_Ammar.pdf";
export default function Contact() {
  return (
    <div className="contact">
      <h1>Let's Connect</h1>
      <p>Looking for a Project Buddy or some motivation? Reach out to me.</p>
      <div className="social-links">
        <button
          className="icon-button"
          onClick={() =>
            window.open("mailto:ammarsaleem9117@gmail.com", "_blank")
          }
        >
          <i class="fa-solid fa-envelope"></i>
        </button>
        <button
          className="icon-button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/am4b44b8273/", "_blank")
          }
        >
          <i class="fa-brands fa-linkedin"></i>
        </button>
        <button
          className="icon-button"
          onClick={() =>
            window.open("https://github.com/DracoRaiden", "_blank")
          }
        >
          <i class="fa-brands fa-github"></i>
        </button>
      </div>

      <a href={resume} download className="download-btn">
        <button className="resume">
          <i class="fa-solid fa-download"></i> Download Resume
        </button>
      </a>
    </div>
  );
}
