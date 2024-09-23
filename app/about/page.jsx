import { Footer, Navbar } from "@/components";
import React from "react";

const AboutCompany = () => {
  return (
    <div className="about-company">
      <a href="/" className="fixed-wa">
        <img src="/wa.svg" alt="" />
      </a>
      <Navbar />
      <div className="top-section">
        <div className="main-text">
          <h1>
            About Our <br /> Company
          </h1>
        </div>
        <img
          src="/about-banner.webp"
          alt="About Company"
          className="banner-image"
        />
      </div>

      <div className="content">
        <div className="opener">
          <div className="container">
            <p>{`MOTOMI is an after-market vehicle service and repair company, incorporated in 2013. The company fixes a range of petrol and diesel vehicle applications. Vehicles from Asian engineered Honda to American GMC. Equipped with modern software and hardware tools, customers are assured of proper repairs. We are currently operating from 4 locations. MOTOMI is managed by trained technicians with 10-15 years of experience in vehicle maintenance and repair. As a customer-centric business, MOTOMI keeps a proper record of vehicles maintained, in order to carry out timely repair and maintenance`}</p>
          </div>
        </div>

        <section className="goal">
          <div className="container">
            <h2>Our Goal</h2>
            <h3>Your Mobility Maintenance</h3>
            <p>
              The MOTOMI vehicle repair is a key aspect of the Company, which
              prides itself as being one of the most reputable garage workshops
              on Lekki axis Lagos. It has worked very hard in providing
              commendable and modern vehicle repair services, Land Rover,
              Mercedes, Lexus, Audi, as requested by all its long standing
              Customers over the years. And our Vehicle repair/maintenance has
              been broken down into Two(2) major business parts :
              Client-Contract Relationship plan and One-off Drive in repair and
              maintenance. These packages apply the following for premium
              Service. O
            </p>
          </div>
        </section>

        <section className="motomi-advantage">
          <div className="container">
            <h2>MOTOMI ADVANTAGE</h2>

            <div className="advantage-item">
              <p>
                <b>PROFESSIONALISM</b> We have a team of experienced and trained
                technicians to cover a range of high-end engine accessories. We
                have experience working with foreign-owned companies and are
                comfortable with modern cars. Client Drivers training: We offer
                our existing Clients, a free Automobile training for their
                Drivers on an annual basis, as one of our customer loyalty
                programmes.
              </p>
            </div>

            <div className="advantage-item">
              <p>
                <b>RELIABILITY AND TRUST</b> We are not just a business with
                ideas, we are mechanics that offer solutions with modern repair
                tools and know-how. Our customers can relax.
              </p>
            </div>

            <div className="advantage-item">
              <p>
                <b>REPAIR TRACKING AND SPARE-PART EXPENSE HISTORY DATABASE</b>{" "}
                Registered members and corporate bodies have an account of the
                parts they purchase and every repair work done on their
                vehicles. This account can be likened to a statement of account
                from your bank but in this case a statement of repairs! This
                will increase the second or even third hand value of your car.
              </p>
            </div>

            <div className="advantage-item">
              <p>
                <b>MODERN EQUIPMENT</b> Our Workshops are equipped with modern
                tools to get your generators properly maintained and kept on the
                road for good. We fix Japanese, Korean, American and German
                brands.
              </p>
            </div>

            <div className="advantage-item">
              <p>
                <b>SPARE PARTS</b> OEM parts or good after-market manufacturers’
                parts with OEM specifications in your best interest.
              </p>
            </div>

            <div className="advantage-item">
              <p>
                <b>PICKUP AND DELIVERY LOGISTICS</b> We pick up vehicles from
                offices in the morning (Lekki, Ajah, V.I., and Ikoyi) and drop
                them off as well. SERVICE REMINDERS: We offer service reminders
                and proper maintenance procedures.
              </p>
            </div>
          </div>
        </section>

        <section className="locations">
          <div className="container">
            <h2>Our Locations & Capacity</h2>
            <div className="location-list">
              <div className="location-item">
                <img src="/location.png" alt="" />
                <p>
                  7 Fameshe Kehinde, Off Ilasan World Oil, Lekki Epe Expressway
                </p>
                <span>30 Cars</span>
              </div>
              <div className="location-item">
                <img src="/location.png" alt="" />
                <p>26 Karimu Ikotun, Victoria Island</p>
                <span>5 Cars</span>
              </div>
              <div className="location-item">
                <img src="/location.png" alt="" />
                <p>
                  Chevron drive, Opp Gracefield Island, Off Lekki Epe expressway
                </p>
                <span>10 Cars</span>
              </div>
              <div className="location-item">
                <img src="/location.png" alt="" />
                <p>NORD Assembly, Unilag Road Onike, Yaba</p>
                <span>15 Cars</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutCompany;
