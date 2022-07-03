import React from "react";
import "./service.css";
import { BiCheck } from "react-icons/bi";

const Service = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Perform competitive analysis on product look and feel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create and maintain style guides.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create visual designs, such as typography, buttons, color palette.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing interactive design, such as animation, interactivity, prototype.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Apply cohesive branding across design elements.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end development.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating views based on existing user interface</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating interactive views using css styles</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using the ReactJS framework in frontend development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating an API using the golang language</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Working on CI/CD using github action</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
