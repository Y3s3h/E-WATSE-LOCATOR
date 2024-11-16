// src/pages/PrivacyPolicy.js
// import React from "react";

// function PrivacyPolicy() {
//   return <h1>Privacy Policy</h1>;
// }

// export default PrivacyPolicy;

import React from "react";
import "./PrivacyPolicy.css"; // Import CSS as a separate file
import Footer from "../components/Footer";
// import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container">
        <div className="background-container">
          {/* SVG Background */}
          <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#1a4d2e", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#2d8659", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffffff", stopOpacity: 0.1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ffffff", stopOpacity: 0.3 }}
                />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad1)" />
            <path
              d="M0,150 L300,250 L600,150 L900,250 L1200,150 L1200,600 L0,600 Z"
              fill="url(#grad2)"
              opacity="0.2"
            />
            <path
              d="M0,300 L300,400 L600,300 L900,400 L1200,300 L1200,600 L0,600 Z"
              fill="url(#grad2)"
              opacity="0.3"
            />
            <path
              d="M100,100 h50 v50 h100"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M800,200 h100 v-50 h150"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M300,500 h200 v-100 h100"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <circle cx="150" cy="150" r="20" fill="#ffffff" opacity="0.1" />
            <circle cx="850" cy="250" r="30" fill="#ffffff" opacity="0.1" />
            <circle cx="500" cy="400" r="25" fill="#ffffff" opacity="0.1" />
          </svg>
        </div>

        <h1>Privacy Policy</h1>

        <div className="section">
          <h2>Introduction</h2>
          <p>
            Welcome to E-Waste Management's Privacy Policy. We respect your
            privacy and are committed to protecting your personal data.
          </p>
        </div>

        <div className="section">
          <h2>Information We Collect</h2>
          <p>We collect and process the following types of information:</p>
          <ul>
            <li>
              Personal identification information (Name, email address, phone
              number)
            </li>
            <li>Address and location data for e-waste collection</li>
            <li>Device information and IP addresses</li>
            <li>E-waste details and disposal history</li>
          </ul>
        </div>

        <div className="section">
          <h2>How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Facilitate e-waste collection and recycling services</li>
            <li>Communicate about our services and updates</li>
            <li>Process your requests and transactions</li>
            <li>Improve our services and user experience</li>
            <li>Comply with legal obligations and regulations</li>
          </ul>
        </div>

        <div className="section">
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access.
          </p>
        </div>

        <div className="section">
          <h2>Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request transfer of your data</li>
          </ul>
        </div>

        <div className="section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p>
            Email: privacy@ewaste-management.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Green Street, Eco City, EC 12345
          </p>
        </div>

        <p className="last-updated">Last updated: November 13, 2024</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
