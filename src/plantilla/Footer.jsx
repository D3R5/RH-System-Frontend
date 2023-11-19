import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary text-light text-center py-2 footer">
      <div className="container">
        <p>Sistema de Recursos Humanos</p>
        <Link
          className="text-light text-decoration-none"
          href="https://github.com/D3R5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        <p>&copy; {new Date().getFullYear()} DERS</p>
      </div>
    </footer>
  );
}

export default Footer;
