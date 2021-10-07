import React from "react";
// import { Link } from "react-router-dom";
import emailIcon from "../assets/icons/email.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import websiteIcon from "../assets/icons/website.png";

function Footer(props) {
  return (
    <footer>
      <ul className="footer">
        <li className="mx-2">
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
        <li className="mx-2">
          <a href="malito:jennifer.menjivar18@gmail.com" rel="noreferrer">
            <img src={emailIcon} alt="Email Icon" className="footer-icon" />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://jennmenji.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={websiteIcon} alt="Website Icon" className="footer-icon" />
          </a>
        </li>
        <li className="mx-2">
          <a
            href="https://github.com/JennMenji"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub Icon" className="footer-icon" />
          </a>
        </li>
      </ul>
      <h6 className="footer">Thank you for visiting!</h6>
    </footer>
  );
}

export default Footer;
