import React from "react";
import resumePhoto from "../assets/cover/cover-image.jpg";

function Resume() {
  return (
    <div>
      <img src={resumePhoto} alt="Resume Screenshot" className="resume"></img>
    </div>
  );
}

export default Resume;
