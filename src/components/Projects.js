import React from "react";
// import { capitalizeFirstLetter } from "../assets/utils/helpers";
// import Photolist from "./Photolist.js";

function Projects() {
  const projects = [
    {
      id: 0,
      name: "Castle Cottage or Cave",
      skills:
        "JavaScript, MongoDB, Express, React, Node, Bootstrap, Apollo Server, React Router, Graph QL, and Heroku",
      github: "https://github.com/JennMenji/castle-cottage-or-cave",
      deployed: "https://damp-inlet-70422.herokuapp.com/",
      description:
        "A MERN-stack application that searches for and saves rental property listings and realtor contacts by city, state, number of bedrooms and bathrooms as well as maximum price using the US Real Estate API",
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
      skills:
        "JavaScript, Handlebars.js, CSS, Express.js, Express-Session, MySQL, Sequelize, and Heroku",
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
            <h5>{project.skills}</h5>
            <p>{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              id={project.id}
            >
              <button>GitHub Repository</button>
            </a>
            <a
              href={project.deployed}
              target="_blank"
              rel="noreferrer"
              id={project.id}
            >
              <button>Deployed Application</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
