import React from 'react';
import schedular from '../../assets/ss2.png';
import wd from '../../assets/1.png';
import bx from '../../assets/home-page.png';
import dp from '../../assets/1.gif';
import jf from '../../assets/jf.png';
import pg from '../../assets/5.png';
import './project.css';

const projects = [
  {

    title: "BrumExplorer",
    description: "HTML, CSS, JavaScript, API",
    link: "https://github.com/sunielmudhar/BrumExplorer",
    deployedLink: "https://github.com/sunielmudhar/BrumExplorer",
    image: bx,
  },
  {
    title: "Jobify",
    description: "HTML, CSS, JavaScript, API, Tailwind, Animate.CSS",
    link: "https://github.com/victoriadeyemi/jobify-project",
    deployedLink: "https://github.com/victoriadeyemi/jobify-project",
    image: jf
  },


  {
    title: "Daily Planner App",
    description: "HTML, CSS, JavaScript",
    link: "https://github.com/tayyabaifzal/Daily-Planner-App",
    deployedLink: "https://tayyabaifzal.github.io/Daily-Planner-App/",
    image: dp
  },

  {
    title: "Weather Dashboard",
    description: "HTML, CSS, JavaScript, API",
    link: "https://github.com/tayyabaifzal/Weather-Dashboard",
    deployedLink: "https://tayyabaifzal.github.io/Weather-Dashboard/",
    image: wd,
  },


  {
    title: "Password Generator",
    description: "HTML, CSS, JavaScript",
    link: "https://github.com/tayyabaifzal/Password-Generator-",
    deployedLink: "https://tayyabaifzal.github.io/Password-Generator-/",
    image: pg
  },
  {
    title: "Coding Quiz",
    description: "HTML, CSS, JavaScript",
    link: "https://github.com/tayyabaifzal/code-quiz",
    deployedLink: "https://tayyabaifzal.github.io/code-quiz/",
    image: schedular,
  },

];

export default function Projects() {
  return (

    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="img-container">
            <img className="project-img" src={project.image} alt={project.title} />
          </div>
          <div className="content">
            <p>
              <strong>Title:</strong> {project.title}
            </p>
            <p>
              <strong>Repo:</strong> <a href={project.link}>GitHub</a>
            </p>
            <p>
              <strong>Skills Used:</strong> {project.description}
            </p>
          </div>

        </div>

      ))
      }
    </div>
  );
}


