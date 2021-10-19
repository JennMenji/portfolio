import React from "react";
// import { Link } from "react-router-dom";
import resumeImg from "../assets/cover/resume-image.png";
import resume from "../assets/files/tech-resume-2021.pdf";

function Resume() {
  return (
    <section className="resume-section">
      <div className="flex-row resume-container">
        <img src={resumeImg} alt="Resume Screenshot" className="resume"></img>

        <div className="overlay">
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="jenn-menjivar-resume"
            className="overlay-link"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
