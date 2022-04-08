import { GitHub } from "@mui/icons-material";
import React from "react";
import "./projectCard.css";

const ProjectCard = ({ project: { name, img, deployed_url, github_url } }) => {
  return (
    <div className="projectCard">
      <figure className="projectCard__wrapper">
        <a href={deployed_url} target="_blank" rel="noreferrer">
          <img src={img} alt={name} className="projectCard__img" />
        </a>

        <div className="projectCard__title">
          <a
            href={github_url}
            className="projectCard__icon"
            target="_blank"
            rel="noreferrer"
          >
            <div className="nameGit">
              <GitHub className="icon" style={{ fill: "#94C431" }} />
              {name}
            </div>
          </a>
        </div>
      </figure>
    </div>
  );
};

export default ProjectCard;
