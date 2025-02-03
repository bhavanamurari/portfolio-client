import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Murari Bhavana</p>
      <div className="social-links">
        <a
          href="https://github.com/muraribhavana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon icon-github">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/muraribhavana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon icon-linkedin">
            <FaLinkedin />
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
