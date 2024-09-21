import { Footer, Navbar } from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
        <div className="container">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
