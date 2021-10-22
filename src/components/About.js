import React from "react";
import headshot from "../assets/cover/headshot.jpg";

const About = () => {
  return (
    <section className="my-5">
      <div className="page-header">
        <h2 id="about">JENN MENJIVAR</h2>
        <h6>she/hers/her</h6>
      </div>
      <div className="page-content">
        <img src={headshot} className="content-img" alt="headshot" />
        <div className="content-info">
          <p>
            I am Front End Web Developer leveraging Hospitality background to
            optimize client experiences and foster an inclusive team
            environment. Graduated with a Certificate from Trilogy Education’s
            Full Stack Web Development course at the University of Central
            Florida, with skills such as CSS, JavaScript, Express, React.js, and
            responsive mobile web design.
          </p>

          <p>
            Known for being research-focused and leveraging knowledge to easily
            adapt to different and fast-changing environments. Developed
            technical skills by learning both Front and Back-end technologies
            weekly with the objective to apply skill-sets alongside a team of
            three to generate a full stack MERN application. My goal with each
            project is to utilize my analytical and creative skills to create
            modern, functional, and visually appealing applications.
          </p>

          <p>
            As a meticulous problem solver and natural team player, I look
            forward to collaborating with a team where I can identify errors,
            develop optimal code, and produce successful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
