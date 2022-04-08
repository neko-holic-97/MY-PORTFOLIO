import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__intro">
        <p>
          It all started in 2020 I happened to see an advertising channel
          instructing how to make a website. I started learning HTML, CSS and
          Vanilla Javascript. Then I picked ReactJS to help me on the long run
          on the front-end. I also know basic about NodeJS (back-end).
          <br /> Currently, I'm continuing to improve my skills and planning on
          doing a certification in MERN stack so I can get into full-stack
          development.
        </p>
      </div>
      <div className="about__skills">
        <h3>What I offer</h3>
        <div className="about__skillcards">
          <div className="about__skillcard">
            <img
              className="about__skillcardImg"
              src={require("../../assets/coding.png")}
              alt="coding"
            />
            <div className="about__skillcardContent">
              <h4>Web Development</h4>
              <small>SPA using HTML, CSS and React.js</small>
            </div>
          </div>
          <div className="about__skillcard">
            <img
              className="about__skillcardImg"
              src={require("../../assets/webdesign.png")}
              alt="webdesign"
            />
            <div className="about__skillcardContent">
              <h4>Web Design</h4>
              <small>User Interface designer using Figma</small>
            </div>
          </div>
          <div className="about__skillcard">
            <img
              className="about__skillcardImg"
              src={require("../../assets/responsive.png")}
              alt="responsive"
            />
            <div className="about__skillcardContent">
              <h4>API Development</h4>
              <small>Build RESTful API with Node.js Express and MongoDB</small>
            </div>
          </div>
          <div className="about__skillcard">
            <img
              className="about__skillcardImg"
              src={require("../../assets/cssfile.png")}
              alt="cssfile"
            />
            <div className="about__skillcardContent">
              <h4>PSD to HTML</h4>
              <small>I'll convert them into fully responsive.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
