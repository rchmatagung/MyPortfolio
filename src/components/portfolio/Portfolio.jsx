import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/AmalKita.png";
import IMG2 from "../../assets/ChattingApp.png";
import IMG3 from "../../assets/golang.png";
import IMG4 from "../../assets/CodeIn.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "AmalKita",
    github: "https://github.com/rchmatagung/",
    demo: "https://github.com/rchmatagung/",
  },
  {
    id: 2,
    image: IMG2,
    title: "ChattingApp",
    github: "https://github.com/rchmatagung/ChattingApp",
    demo: "https://chatting-apps.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "BookPurchase API",
    github: "https://github.com/rchmatagung/MiniProject-BackEnd/tree/master",
    demo: "https://github.com/rchmatagung/MiniProject-BackEnd/tree/master",
  },
  {
    id: 4,
    image: IMG4,
    title: "CodeIn",
    github: "https://github.com/rchmatagung/CodeIn",
    demo: "https://fe.codein.studio/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id}className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
