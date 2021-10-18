import React from "react";
import resume from "../assets/cover/resume-screenshot.png";

function Resume() {
  return (
    <div className="flex-row">
      <img src={resume} alt="Resume Screenshot" className="resume"></img>
    </div>
  );
}

export default Resume;
