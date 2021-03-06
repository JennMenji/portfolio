import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2 nav-text">
          <Link as={Link} to="/about">
            About Me
          </Link>
        </li>
        <li className="mx-2 nav-text">
          <Link as={Link} to="/projects">
            Projects
          </Link>
        </li>
        <li className="mx-2 nav-text">
          <Link as={Link} to="/resume">
            Resume
          </Link>
        </li>
        <li className="mx-2 nav-text">
          <Link as={Link} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
