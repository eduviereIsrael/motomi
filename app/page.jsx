import Image from "next/image";
import styles from "./page.module.css";
import { Footer, Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="auto-service-container">
            <header>
              <h4>WELCOME TO MOTOMI</h4>
              <div className="underline"></div>
            </header>
            <h1>The Best Auto service For Your Vehicle</h1>
            <p>
              Expert repairs and maintenance to keep your vehicle in top shape.
              Trust Motomi for reliable, top-quality auto care.
            </p>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </div>
      <section className="about">
        <div className="container">
          <div className="about-image">
            <img src="/about-img.png" alt="Auto Repair Services" />
          </div>

          <div className="about-content">
            <header>
              <h4>ABOUT US</h4>
              <div className="underline"></div>
            </header>
            <h2>Your Trusted Auto Experts: Who We Are and What We Do</h2>
            <p>
              The MOTOMI vehiclerepair is a key aspect of the Company, which
              prides itself as being one of the most reputable garage workshops
              on Lekki axis Lagos. It has worked very hard in providing
              commendable and modern vehicle repair services.
            </p>
            <div className="services-list">
              <span className="service-item">
                <img src="/check.svg" alt="Checkmark" />
                <p>Vehicle Maintenance</p>
              </span>
              <span className="service-item">
                <img src="/check.svg" alt="Checkmark" />
                <p>One-off Drive in repair</p>
              </span>
              <span className="service-item">
                <img src="/check.svg" alt="Checkmark" />
                <p>Tow Services</p>
              </span>
              <span className="service-item">
                <img src="/check.svg" alt="Checkmark" />
                <p>Client-Contract Relationship plan</p>
              </span>
            </div>
            <button className="book-now-btn">Book Now</button>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="service-card">
            <img
              src="/gear.svg"
              alt="High Quality Gear"
              className="service-icon"
            />
            <h3>High Quality Gear</h3>
            <p>
              The MOTOMI vehiclerepair is a key aspect of the Company, which
              prides itself as being one of the most reputable garage workshops
              on Lekki axis Lagos. It has worked very hard in providing
              commendable and modern vehicle repair services.
            </p>
          </div>

          <div className="service-card highlighted">
            <img
              src="/tools.svg"
              alt="Expert Mechanics"
              className="service-icon"
            />
            <h3>Expert Mechanics</h3>
            <p>
              The MOTOMI vehiclerepair is a key aspect of the Company, which
              prides itself as being one of the most reputable garage workshops
              on Lekki axis Lagos. It has worked very hard in providing
              commendable and modern vehicle repair services.
            </p>
          </div>

          <div className="service-card">
            <img
              src="/service.svg"
              alt="Complete Service"
              className="service-icon"
            />
            <h3>Complete Service</h3>
            <p>
              The MOTOMI vehiclerepair is a key aspect of the Company, which
              prides itself as being one of the most reputable garage workshops
              on Lekki axis Lagos. It has worked very hard in providing
              commendable and modern vehicle repair services.
            </p>
          </div>
        </div>
      </section>
      <section className="top-banner">
        <div className="container">
          <h2>We are always ready to solve all your automobile problems</h2>

          <button className="book-now-btn">Book Now</button>
        </div>
      </section>
      <section className="serve">
        <div className="container">
          <div className="header">
            <div className="intro">
              <h4>OUR SERVICES</h4>
              <div className="underline"></div>
            </div>
              <h2>Explore Our Services</h2>
            {/* <button className="book-now-btn">All Services</button> */}
          </div>
          <div className="cards">
            <div className="card">
              <img src="/vm.png" alt="" />
              <div className="content">
                <h4>Vehicle Maintenance</h4>
                <p>
                  Quality of service and repair, with prompt response with 24/7
                  support. We offer a variety of maintenance contracts that
                  cater to each customer&apos;s needs
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/odir.png" alt="" />
              <div className="content">
                <h4>One-off Drive in repair</h4>
                <p>
                  We work hard in providing modern vehicle repair services, Land
                  Rover, Mercedes, Lexus, Audi, as requested by new and long
                  standing Customers over the years
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/ts.png" alt="" />
              <div className="content">
                <h4>Tow Services</h4>
                <p>We tow your vehicles for a fee within Lagos</p>
              </div>
            </div>
            <div className="card">
              <img src="/ccrp.png" alt="" />
              <div className="content">
                <h4>We tow your vehicles for a fee within Lagos</h4>
                <p>
                  We offer a variety of innovative and cost effective solutions
                  from a normal service up to major overhauling including
                  procurement, etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey">
        <p>heelo</p>
      </section>
      <section className="partners">
        <div className="container">
          <h2>OUR PARTNER COMPANIES</h2>
          <div className="cards">
            <div className="card">
              <img src="one.png" alt="" />
            </div>
            <div className="card">
              <img src="two.png" alt="" />
            </div>
            <div className="card">
              <img src="three.png" alt="" />
            </div>
            <div className="card">
              <img src="four.png" alt="" />
            </div>
            <div className="card">
              <img src="five.png" alt="" />
            </div>
            <div className="card">
              <img src="six.png" alt="" />
            </div>
            <div className="card">
              <img src="seven.png" alt="" />
            </div>
            <div className="card">
              <img src="eight.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-banner">
      <div className="container">
          <div className="auto-service-container">
            <h2>We Always Give The Best Services To Our Clients</h2>
            <p>
            The MOTOMI vehicle repair is a key aspect of the Company, which prides itself as being one of the most reputable garage workshops on Lekki axis Lagos. It has worked very hard in providing commendable and modern vehicle repair services, Land Rover, Mercedes, Lexus, Audi, as requested by all its long standing Customers over the years. And our Vehicle repair/maintenance has been broken down into Two(2) major business parts : Client-Contract Relationship plan and One-off Drive in repair and maintenance. These packages apply the following for premium Service.
            </p>
            <button className="book-now-btn">Contact Us</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
