import React from "react";
import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaTools,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";

const skillsData = [
  {
    title: "Programming",
    icon: <FaCode />,
    skills: ["C", "Python", "Java", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: ["React.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: <FaLaptopCode />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Version Control",
    icon: <FaGitAlt />,
    skills: ["Git", "GitHub"],
  },
  {
    title: "Other Skills",
    icon: <FaTools />,
    skills: ["Redux", "Axios", "jQuery", "RESTful API", "Figma", "VSCode"],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skillsData.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
