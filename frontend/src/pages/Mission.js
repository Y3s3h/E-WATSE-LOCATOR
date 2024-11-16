import React from "react";
// import { Link } from "react-router-dom";
import "./Misson.css";
import Footer from "../components/Footer";

const BackgroundSVG = () => (
  <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#052e16", stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: "#065f46", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#047857", stopOpacity: 1 }} />
      </linearGradient>

      <radialGradient id="glowEffect" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
      </radialGradient>

      <pattern
        id="circuitPattern"
        x="0"
        y="0"
        width="50"
        height="50"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 25h50M25 0v50"
          stroke="#ffffff"
          strokeWidth="0.5"
          opacity="0.1"
        />
        <circle cx="25" cy="25" r="3" fill="#ffffff" opacity="0.2" />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#bgGrad)" />
    <rect width="100%" height="100%" fill="url(#circuitPattern)" />

    <g opacity="0.1" fill="#ffffff">
      <path d="M600,300 L650,200 L700,300 Z" transform="rotate(120 600 300)" />
      <path d="M600,300 L650,200 L700,300 Z" transform="rotate(240 600 300)" />
      <path d="M600,300 L650,200 L700,300 Z" />
    </g>

    <g stroke="#ffffff" strokeWidth="1" opacity="0.15" fill="none">
      <path d="M0,200 Q300,250 600,200 T1200,200" />
      <path d="M0,400 Q300,450 600,400 T1200,400" />
      <path d="M0,600 Q300,650 600,600 T1200,600" />
    </g>

    <g>
      <circle cx="200" cy="150" r="20" fill="url(#glowEffect)" />
      <circle cx="1000" cy="250" r="25" fill="url(#glowEffect)" />
      <circle cx="600" cy="450" r="30" fill="url(#glowEffect)" />
      <circle cx="150" cy="650" r="15" fill="url(#glowEffect)" />
      <circle cx="850" cy="600" r="20" fill="url(#glowEffect)" />
    </g>
  </svg>
);

const MissionCard = ({ icon, title, content }) => (
  <div className="mission-card">
    <div className="icon-container">
      <i className={`fas ${icon}`}></i>
    </div>
    <h2 className="card-title">{title}</h2>
    <p className="card-content">{content}</p>
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const Mission = () => {
  const missionCards = [
    {
      icon: "fa-recycle",
      title: "Sustainable Recycling",
      content:
        "Implementing cutting-edge recycling technologies to maximize resource recovery and minimize environmental impact.",
    },
    {
      icon: "fa-leaf",
      title: "Environmental Protection",
      content:
        "Safeguarding our planet through responsible e-waste disposal and promoting circular economy practices.",
    },
    {
      icon: "fa-hand-holding-heart",
      title: "Community Impact",
      content:
        "Creating positive change through education, awareness, and accessible e-waste management solutions.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Tons Recycled" },
    { number: "100+", label: "Partner Companies" },
    { number: "25K", label: "Trees Saved" },
    { number: "98%", label: "Recovery Rate" },
  ];

  return (
    <>
      <div className="background-container">
        <BackgroundSVG />
      </div>

      <div className="container">
        <div className="mission-header">
          <h1 className="mission-title">Our Mission</h1>
          <p className="mission-subtitle">
            Leading the way in sustainable e-waste management for a cleaner,
            greener future
          </p>
        </div>

        <div className="mission-grid">
          {missionCards.map((card, index) => (
            <MissionCard key={index} {...card} />
          ))}
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="vision-section">
          <div className="vision-content">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-text">
              We envision a world where electronic waste is transformed from an
              environmental challenge into an opportunity for sustainable
              development and innovation.
            </p>
            <ul className="vision-list">
              <li>Zero landfill impact from electronic waste by 2030</li>
              <li>Complete transparency in recycling processes</li>
              <li>Global leadership in sustainable technology</li>
              <li>Community education and empowerment</li>
            </ul>
            {/* <Link to="#" className="gradient-button">
              Join Our Mission
            </Link> */}
            <a
              href="https://en.wikipedia.org/wiki/E-waste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="gradient-button">Join Our Mission</button>
            </a>
          </div>

          <div className="vision-content">
            <h2 className="vision-title">Our Values</h2>
            <p className="vision-text">
              Our commitment to sustainability is guided by core values that
              shape every aspect of our operations.
            </p>
            <ul className="vision-list">
              <li>Environmental Stewardship</li>
              <li>Innovation in Recycling</li>
              <li>Community Partnership</li>
              <li>Ethical Business Practices</li>
            </ul>
            {/* <Link to="#" className="gradient-button">
              Learn More
            </Link> 
            */}

            <a
              href="https://en.wikipedia.org/wiki/E-waste"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="gradient-button">Learn More</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
