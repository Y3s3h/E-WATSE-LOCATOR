import React from "react";
import "./StaffMembers.css";
import Footer from "../components/Footer";

const StaffMembers = () => {
  return (
    <div>
      {/* Background Animation */}
      <div className="background-animation">
        <div className="cube cube-1">
          <div className="face face-front"></div>
          <div className="face face-back"></div>
          <div className="face face-right"></div>
          <div className="face face-left"></div>
          <div className="face face-top"></div>
          <div className="face face-bottom"></div>
        </div>
        <div className="cube cube-2">
          <div className="face face-front"></div>
          <div className="face face-back"></div>
          <div className="face face-right"></div>
          <div className="face face-left"></div>
          <div className="face face-top"></div>
          <div className="face face-bottom"></div>
        </div>
        <div className="cube cube-3">
          <div className="face face-front"></div>
          <div className="face face-back"></div>
          <div className="face face-right"></div>
          <div className="face face-left"></div>
          <div className="face face-top"></div>
          <div className="face face-bottom"></div>
        </div>
      </div>

      {/* Circuit Lines */}
      <div className="circuit-lines"></div>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Staff Section */}
      <section className="staff-section">
        <div className="container2">
          <div className="section-title">
            <h2>Our Expert Team</h2>
            <p>
              Meet our dedicated professionals who are committed to sustainable
              e-waste management and environmental preservation.
            </p>
          </div>

          <div className="staff-grid">
            {/* Team Member 1 */}
            <div className="staff-card">
              <div className="staff-image">
                <img src="/MYPIC.jpg" alt="John Doe" />
              </div>
              <h3 className="staff-name">Yash Yadav</h3>
              <p className="staff-position">Operations Manager</p>
              <p className="staff-bio">
                10+ years of experience in e-waste management and sustainable
                practices. Leading our operations team towards efficient
                recycling solutions.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/yash-yadav-094b0027b"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a href="https://github.com/Y3s3h" aria-label="Twitter">
                  gh
                </a>
                <a
                  href="https://www.instagram.com/itz_yash_here730?igsh=YXkyNnJycmQxb3Jy"
                  aria-label="Email"
                >
                  ig
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="staff-card">
              <div className="staff-image">
                <img src="/kajal.jpg" alt="Jane Smith" />
              </div>
              <h3 className="staff-name">Kajal</h3>
              <p className="staff-position">Environmental Specialist</p>
              <p className="staff-bio">
                Environmental science expert with focus on sustainable recycling
                methods and minimal environmental impact strategies.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/yash-yadav-094b0027b"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a href="https://github.com/Y3s3h" aria-label="Twitter">
                  gh
                </a>
                <a
                  href="https://www.instagram.com/itz_yash_here730?igsh=YXkyNnJycmQxb3Jy"
                  aria-label="Email"
                >
                  ig
                </a>
              </div>
            </div>

            {/*team member 3*/}

            <div className="staff-card">
              <div className="staff-image">
                <img src="tushar.jpg" alt="Jane Smith" />
              </div>
              <h3 className="staff-name">Tushar</h3>
              <p className="staff-position">Environmental Specialist</p>
              <p className="staff-bio">
                Environmental science expert with focus on sustainable recycling
                methods and minimal environmental impact strategies.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/yash-yadav-094b0027b"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a href="https://github.com/Y3s3h" aria-label="Twitter">
                  gh
                </a>
                <a
                  href="https://www.instagram.com/itz_yash_here730?igsh=YXkyNnJycmQxb3Jy"
                  aria-label="Email"
                >
                  ig
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="staff-card">
              <div className="staff-image">
                <img src="/shashi.jpg" alt="Mike Johnson" />
              </div>
              <h3 className="staff-name">Shashikant</h3>
              <p className="staff-position">Technical Director</p>
              <p className="staff-bio">
                Specializes in implementing innovative recycling technologies
                and maintaining quality control standards.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/yash-yadav-094b0027b"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a href="https://github.com/Y3s3h" aria-label="Twitter">
                  gh
                </a>
                <a
                  href="https://www.instagram.com/itz_yash_here730?igsh=YXkyNnJycmQxb3Jy"
                  aria-label="Email"
                >
                  ig
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default StaffMembers;
