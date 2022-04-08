import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume__container">
      <div className="resume__containerInfo">
        <h3>Education</h3>
        <h4>Computer Science Enginnering </h4>
        <span>Hanoi University Of Science And Technology </span>
        <p>
          I am currently pursuing Bachelor's degree in Computer Science
          Enginnering at Hanoi University Of Science And Technology.
        </p>
      </div>
      <div className="resume__containerSkill">
        <div className="resume__containerInfoLeft">
          <h3>Language and Framework</h3>
          <ul className="skill">
            <li>
              <span className="bar react-js"></span>
              <h3>React JS</h3>
            </li>
            <li>
              <span className="bar javascript"></span>
              <h3>JavaScript</h3>
            </li>
            <li>
              <span className="bar html-css"></span>
              <h3>Html / Css</h3>
            </li>
            <li>
              <span className="bar material-ui"></span>
              <h3>Material-UI</h3>
            </li>
            <li>
              <span className="bar expressjs"></span>
              <h3>ExpressJs</h3>
            </li>
            <li>
              <span className="bar mongodb"></span>
              <h3>Mongo DB</h3>
            </li>
          </ul>
        </div>
        <div className="resume__containerInfoRight">
          <h3>Tools and Softwares</h3>
          <ul className="skill">
            <li>
              <span className="bar figma"></span>
              <h3>Figma</h3>
            </li>
            <li>
              <span className="bar firebase"></span>
              <h3>Firebase</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
