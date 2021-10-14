import React from "react";
// import { capitalizeFirstLetter } from "../assets/utils/helpers";
// import Photolist from "./Photolist.js";

function Projects() {
  const projects = [
    {
      id: 0,
      name: "Castle Cottage or Cave",
      skills: "commercial",
      github: "https://github.com/JennMenji/castle-cottage-or-cave",
      deployed: "https://damp-inlet-70422.herokuapp.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      id: 1,
      name: "Weather Dashboard",
      skills: "commercial",
      github: "https://github.com/JennMenji/Challenge6-Weather-Dashboard",
      deployed: "https://jennmenji.github.io/Challenge6-Weather-Dashboard/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      id: 2,
      name: "Tech Blog",
      skills: "commercial",
      github: "https://github.com/JennMenji/tech-blog",
      deployed: "https://tech-blog-1021.herokuapp.com",
      description:
        "A blog style application that utilizes a MVC paradigm as the architectural structure to allow users to login and have discussions with other Tech enthusiasts ",
    },
  ];

  return (
    <section>
      <div className="flex-row">
        {projects.map((project) => (
          <div>
            <h4>{project.name}</h4>
            <h5>Technologies used: {project.skills}</h5>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              id={project.id}
            >
              GitHub Repository
            </a>
            <a
              href={project.deployed}
              target="_blank"
              rel="noreferrer"
              id={project.id}
            >
              Deployed Application
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
