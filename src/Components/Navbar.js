import logo from "../img/logo.png";
import "../Css/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo.png" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#Home" alt="err">
              Home
            </a>
          </li>
          <li>
            <a href="#About" alt="err">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" alt="err">
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" alt="err">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" alt="err">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
