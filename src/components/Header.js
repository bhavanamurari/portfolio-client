import React, { useEffect, useState } from "react";

const Header = () => {
 const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav>
        <ul>
          <li>
            <a
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
