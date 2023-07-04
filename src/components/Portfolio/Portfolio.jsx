import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: "assests/portfolio1.jpg",
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: "assests/portfolio2.jpg",
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: "assests/portfolio3.jpg",
    title: "Figma dashborad UI kit for data desihn web apps",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: "assests/portfolio4.jpg",
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: "assests/portfolio5.png",
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: "assests/portfolio6.jpg",
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map((data) => (
          <article key={data.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={data.image} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href={data.github} className="btn">
                Github
              </a>
              <a
                href={data.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
