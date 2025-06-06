import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Add this file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Name */}
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Logo" />
          <h2>Pizza Bite</h2>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="/">Home</Link>
          {/* <Link to="/menu">Menu</Link> */}
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Pizza Bite | All Rights Reserved</p>
      </div>
    </footer>
  );
}
