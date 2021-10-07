import React from "react";
import headshot from "../assets/cover/headshot.jpg";

const About = () => {
  return (
    <section className="my-5">
      <h1 id="about">Jenn Menjivar</h1>
      <img
        src={headshot}
        className="my-2"
        style={{ width: "100%" }}
        alt="headshot"
      />
    </section>
  );
};

export default About;
