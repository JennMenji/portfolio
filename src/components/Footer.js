import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../assets/icons/email.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import homeIcon from "../assets/icons/home.png";

function Footer(props) {
  return (
    <footer>
      <ul className="footer">
        <li>
          <Link as={Link} to="/">
            <img src={homeIcon} alt="Website Icon" className="footer-icon" />
          </Link>
          {/* <a href="https://jennmenji.github.io/portfolio/" rel="noreferrer">
            
          </a> */}
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jennmenjivar/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn Icon"
              className="footer-icon"
            />
          </a>
        </li>
        <li>
          <a href="mailto:jennifer.menjivar18@gmail.com">
            <img src={emailIcon} alt="Email Icon" className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JennMenji"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub Icon" className="footer-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
