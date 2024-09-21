import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-row">
          <div className="nav-section">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="hours-section">
            <div className="cont">

                <h4>Our Working Hours</h4>
                <ul>
                <li>Mon-Fri: 9am - 5pm</li>
                <li>Saturday: 9am - 3pm</li>
                <li>Sunday: By Appointment</li>
                </ul>
            </div>
          </div>

          <div className="contact-section">
            <div className="cont">

                <span>
                <h4>Email</h4>
                <p>motomiautorepair@gmail.com</p>
                </span>

                <span>
                <h4>Address 1</h4>
                <p>Behind Northpoint Estate, <br/> Chevron Drive, Lekki, Lagos.</p>
                </span>

                <span>
                <h4>Phone</h4>
                <p>08033603906, 07025002960, 08170939116</p>
                </span>
            </div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="logo-section">
            <img src="/motomi-logo.svg" alt="Motomi Logo" className="logo" />
          </div>
          <div className="copyright">
            <p>©2013 MOTOMI Inc.</p>
          </div>
          <div className="social-section">
            <a href="#">
              <img src="/fb.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/ig.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/wa.svg" alt="WhatsApp" />
            </a>
            <a href="#">
              <img src="/x.svg" alt="Close" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
