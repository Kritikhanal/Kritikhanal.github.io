import React from "react";
import "./menu.css";
import img from "../../assets/images/ae331564-e09d-4e2c-ab1c-c5ecfe126cf3.jpg";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";
const menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={img} alt="profile-pic" />
          </div>

          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" smooth={true} duration={1000}>
                  <FcHome />
                  Home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link" about>
                <Link to="about" smooth={true} duration={1000}>
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link to="techStack" smooth={true} duration={1000}>
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="education" smooth={true} duration={1000}>
                  <FcReadingEbook />
                  Education
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-link">
                <Link to="projects" smooth={true} duration={1000}>
                  <FcVideoProjector />
                  Projects
                </Link>
              </div>
            </div>

            <div className="nav-item">
              <div className="nav-link">
                <Link to="contact" smooth={true} duration={1000}>
                  <FcBusinessContact />
                  Contacts
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default menu;
