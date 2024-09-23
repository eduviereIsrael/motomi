import Image from "next/image";
import styles from "./page.module.css";
import { Footer, Navbar } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <a href="/" className="fixed-wa" >
        <img src="/wa.svg" alt="" />
      </a>
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
            At Motomi, we pride ourselves on delivering high-quality gear and exceptional service to keep your vehicle running smoothly. With years of experience and a team of skilled technicians, we provide reliable repairs and maintenance tailored to your needs
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
            Our expert mechanics are dedicated to providing top-notch service for your vehicle. With extensive training and experience, our team ensures reliable repairs and maintenance tailored to your needs. Trust us to keep your car running smoothly
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
            we offer complete service for all your car needs. From routine maintenance to complex repairs, our skilled team ensures your vehicle gets the care it deserves. With a focus on quality and customer satisfaction.
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
                <h4>Client-Contract Relationship plan</h4>
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
            <p>We have a team of experienced and trained technicians to cover a range of  high end engine accessories. We have experience working with foreign  owned companies and are comfortable with modern cars. We also offer our existing Clients, a free Automobile training for their  Drivers on an annual basis, as one of our customer loyalty programmes. We are not just a business with ideas, we are  mechanics that offer solutions with modern repair  tools and know-how. Our customers can relax. 
            </p>
            <p>Registered members and corporate bodies have an account of the parts they purchase and every repair work done on their vehicles. This account can be likened to a statement of account from your` bank but in this case  a statement of repairs! This will increase the second or even third hand  value of your car.  Our Workshops are equipped with modern tools to get your  generators properly maintained and kept on the road for  good. We fix Japanese, Korean, American and German brands.  OEM parts or good after-market manufacturers’  parts with OEM specifications in your best interest. We pick up vehicles from offices in the morning  Lekki, Ajah, V.I and Ikoyi and drop them off as well.   We offer service reminders and  proper maintenance procedures </p>
            <button className="book-now-btn">Contact Us</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
