import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/Dott-Luca-Russo-Life-Coach-106249534777992/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/luca_russo_life_coach/?hl=it"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://it.linkedin.com/in/luca-russo-a58b0520a"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_-JgRR0GtZAVizx1WQu6SA"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube />
          </a>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/articoli">Blog</a>
          <a href="/terms">Terms</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className="copyright">Luna Sarmiento © 2022</div>
      </div>
    </div>
  );
};

export default Footer;
