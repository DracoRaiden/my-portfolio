import "../Css/Projects.css";
import yoyo from "../img/yoyo.png";
import amazon from "../img/amazon.png";
import typing from "../img/typing.png";
export default function Projects() {
  return (
    <div className="projects">
      <h1>Featured Projects</h1>
      <div className="my-work">
        <div className="card">
          <div className="img-container">
            <img src={yoyo} alt="err" height={200} />
          </div>
          <div className="card-content">
            <h2>YoYoFood</h2>
            <p>
              Front-end deployed Website that is made for both desktop and
              Mobile. Framework used: React.js
            </p>
            <button
              onClick={() =>
                window.open("https://yoyo-food.vercel.app/", "_blank")
              }
            >
              <i class="fa-brands fa-github"></i>View Webiste
            </button>
          </div>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={amazon} alt="err" height={200} />
          </div>
          <div className="card-content">
            <h2>Amazon HomePage</h2>
            <p>
              Front-end deployed Website that is made for desktop. Framework
              used: HTML and CSS
            </p>
            <button
              onClick={() =>
                window.open("https://amazon-homepage-six.vercel.app/", "_blank")
              }
            >
              <i class="fa-brands fa-github"></i>View Website
            </button>
          </div>
        </div>
        <div className="card">
          <div className="img-container">
            <img src={typing} alt="err" height={200} />
          </div>
          <div className="card-content">
            <h2>Typing Test - 15sec</h2>
            <p>
              Front-end deployed Website that is made for both desktop and
              Mobile. Framework used: React.js
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://github.com/DracoRaiden/Typing-Test",
                  "_blank"
                )
              }
            >
              <i class="fa-brands fa-github"></i>View Repository
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
