import "./sidebar.css";
import React from "react";
import {
  FileDownloadOutlined,
  LocationOnOutlined,
  EmailOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import resume from "../../assets/resume.pdf";
import Button from "@mui/material/Button";

const Sidebar = () => {
  const handleSendMail = () => {
    window.open("mailto:nguyenlinh050397@gmail.com");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          className="sidebar__headerAvatar"
          src={require("../../assets/avatar.jpg")}
          alt="avatar"
        />

        <div className="sidebar__headerName">
          Linh
          <span> Nguyen</span>
        </div>
        <p>"More you know. More you grow."</p>
      </div>
      <div className="sidebar__info">
        <div className="sidebar__infoContainer">
          <a href={resume} download="resume.pdf">
            <FileDownloadOutlined className="sidebar__infoIcon" />
            <span>Download Resume</span>
          </a>
          <a href="#">
            <LocationOnOutlined className="sidebar__infoIcon" />
            <span>Hanoi, Vietnam</span>
          </a>
          <a href="#">
            <EmailOutlined className="sidebar__infoIcon" />
            <span>nguyenlinh050397@gmail.com</span>
          </a>
          <a href="#">
            <PhoneAndroidOutlined className="sidebar__infoIcon" />
            <span>(+84) 329 318 146</span>
          </a>
        </div>
      </div>
      <div className="sidebar__footer">
        {/* <button className="sidebar__button">email me</button> */}

        <Button onClick={handleSendMail}>email me</Button>
      </div>
    </div>
  );
};

export default Sidebar;
