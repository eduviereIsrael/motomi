import { Footer, Navbar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <a href="/" className="fixed-wa">
        <img src="/wa.svg" alt="" />
      </a>
      <Navbar />
      <div className="about-page">
        <div className="container">
          <div className="img"></div>
          <div className="content-wrap">

          <div className="cont">
            <span>
              <h4>Email</h4>
              <p>motomiautorepair@gmail.com</p>
            </span>
            <span>
              <h4>Address 1</h4>
              <p>
                Behind Northpoint Estate, <br /> Chevron Drive, Lekki, Lagos.
              </p>
            </span>

            <span>
              <h4>Phone</h4>
              <p>08033603906, 07025002960, 08170939116</p>
            </span>
          </div>
          <div className="wa-banner">
            <div className="head">
              <img src="/big-wa.png" alt="" />
              <h3>
                CONTACT US ON <br /> OUR WHATSAPP
              </h3>
            </div>
            <div className="body">
              <div className="text">
                <p>
                  Your satisfaction is our top priority—let&apos;s get your car
                  back on the road in no time!
                </p>
                <button className="book-now-btn">Contact Us</button>
              </div>
              <img src="/wa-banner.svg" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
