import React from "react";
import { IoMdOpen } from "react-icons/io";

const projects = [
  {
    title: "Chat App",
    image: "/assets/chat.png",
    description:
      "A real-time chat application built with MERN stack (React.js, Redux, Node.js, Express.js, MongoDB, Axios, Socket.IO).",
    link: "https://chat-app-frontend-flax-eight.vercel.app/",
  },
  {
    title: "Amazon Clone",
    image: "/assets/amazon.png",

    description:
      "A clone of Amazon's e-commerce site built using React.js and Firebase.",
    link: "https://clone-714c0.web.app",
  },
  {
    title: "LinkedIn Clone",
    image: "/assets/linkedin.png",

    description:
      "A LinkedIn clone built using React.js, Redux, Firebase, and Vercel.",
    link: "https://linkedin-clone-amber-mu.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <img src={project.image} alt="images" className="project-image" />
            <p className="project-description">{project.description}</p>
            <div className="view">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
              <div className="view-icon">
                <IoMdOpen />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
