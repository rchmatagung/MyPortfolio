import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0 Client</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
          </div>

          <p>
            Rachmat Agung (20) is a 3rd-year student of Informatics Engineering Universitas Lampung, 
            I'm actively participating in organizations to improve my soft skills, such as Team Work, 
            Communication, Critical Thinking, Analytical Thinking, and Problem Solving. Also, I have 
            completed several projects with a team that supports the recognition of my soft skills.
            There are several abilities that I have or am currently working on including Front End Engineer (ReactJS), 
            Back End Engineer (Golang, PHP, Javascript),Database Management
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
