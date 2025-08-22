import logo from "../img/logo.png";
import "../Css/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#Home">
          <img src={logo} alt="logo.png" />
        </a>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#Home" alt="err">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" alt="err">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" alt="err">
              Skills
            </a>
          </li>
          <li>
            <a href="#my-projects" alt="err">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact-us" alt="err">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
