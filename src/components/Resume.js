import React from "react";
// import { Link } from "react-router-dom";
import resumeImg from "../assets/cover/resume-image.png";
import resume from "../assets/files/tech-resume-2021.pdf";

function Resume() {
  return (
    <section className=" my-5">
      <div className="page-header">
        <h2>RESUME</h2>
        <h6>click on the link below to download my full resume</h6>
      </div>
      <div className="flex-row">
        <div className="overlay-container">
          <img src={resumeImg} alt="Resume Screenshot" className="image"></img>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="jenn-menjivar-resume"
            className="overlay"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
