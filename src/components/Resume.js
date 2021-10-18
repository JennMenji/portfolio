import React from "react";
import resume from "../assets/cover/resume-screenshot.png";

function Resume() {
  return (
    <section className="resume-section">
      <div className="flex-row container">
        <img src={resume} alt="Resume Screenshot" className="resume"></img>

        <div className="overlay">
          <a
            href="https://jennmenji.github.io/portfolio/src/components/Resume.js"
            target="_blank"
            rel="noreferrer"
            download="jenn-menjivar-resume"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
