import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h1>Hi, I'm Murari Bhavana</h1>
      <div className="content">
        <img src="/assets/my image.jpg" alt="me" />
        <p>
          I'm a passionate Full Stack Developer, dedicated to creating
          innovative and user-friendly web applications. With experience in
          front-end and back-end technologies, I strive to build efficient,
          scalable solutions. In addition to development, I also have a strong
          design sense, enabling me to craft visually appealing and intuitive
          interfaces. I'm always eager to learn and enhance my skills, and I am
          committed to delivering high-quality results for every project.
        </p>
      </div>

      <a href="/assets/M Bhavana Resume.pdf" download>
        <button className="btn">Download Resume</button>
      </a>
    </section>
  );
};

export default About;
