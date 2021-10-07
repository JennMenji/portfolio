import React from "react";
import coverImage from "../assets/cover/welcome.jpg";

function Main() {
  return (
    <img
      src={coverImage}
      className="cover-image "
      style={{ width: "100%" }}
      alt="line art cover"
    />
  );
}

export default Main;
