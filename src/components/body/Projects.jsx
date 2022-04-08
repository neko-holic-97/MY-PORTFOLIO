import React from "react";
import "./projects.css";
import data from "../data/data";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="cards">
          {data.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
