// // src/components/MainContent.js
// import React from "react";
// import "./MaainContent.css"; // Importing CSS for styling
// import { FaRecycle, FaLaptop, FaBatteryHalf } from "react-icons/fa"; // For using icons

// const MainContent = () => {
//   return (
//     <div className="main-content-container">
//       {/* Section 1: Introduction */}
//       <section className="intro-section">
//         <h2>Welcome to E-Waste Management</h2>
//         <p>
//           E-waste refers to electronic waste generated from discarded electronic
//           devices. This includes broken or old computers, phones, batteries,
//           televisions, and more. Proper management is essential to reduce
//           environmental hazards and make the most of valuable resources in old
//           electronics.
//         </p>
//       </section>

//       {/* Section 2: E-Waste Statistics */}
//       <section className="stats-section">
//         <h2>E-Waste Statistics</h2>
//         <div className="stats-container">
//           <div className="stat-item">
//             <h3>50 Million Metric Tons</h3>
//             <p>of E-Waste generated globally every year</p>
//           </div>
//           <div className="stat-item">
//             <h3>80%</h3>
//             <p>of e-waste is not recycled properly</p>
//           </div>
//           <div className="stat-item">
//             <h3>Over 100 Elements</h3>
//             <p>are present in modern electronics that can be recycled</p>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: 3D Image - E-Waste Recycling Process */}
//       <section className="three-d-section">
//         <h2>3D Visualization of the E-Waste Recycling Process</h2>
//         <div className="three-d-container">
//           <iframe
//             title="3D Recycling Process"
//             src="https://www.example.com/3d-recycling-process" // Replace with actual 3D model or interactive source
//             width="100%"
//             height="500px"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </section>

//       {/* Section 4: Solutions for E-Waste */}
//       <section className="solutions-section">
//         <h2>Solutions for Managing E-Waste</h2>
//         <div className="solutions-container">
//           <div className="solution-item">
//             <FaRecycle className="solution-icon" />
//             <h3>Recycling Programs</h3>
//             <p>
//               Establishing efficient recycling programs to recover valuable
//               materials from old electronics.
//             </p>
//           </div>
//           <div className="solution-item">
//             <FaLaptop className="solution-icon" />
//             <h3>Extended Producer Responsibility (EPR)</h3>
//             <p>
//               Encouraging manufacturers to take responsibility for the entire
//               lifecycle of their products.
//             </p>
//           </div>
//           <div className="solution-item">
//             <FaBatteryHalf className="solution-icon" />
//             <h3>Consumer Awareness</h3>
//             <p>
//               Increasing consumer awareness about e-waste recycling and disposal
//               methods.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Section 5: Call to Action */}
//       <section className="cta-section">
//         <h2>Get Involved in E-Waste Management</h2>
//         <p>
//           Join us in making the planet cleaner and greener by properly recycling
//           your old electronics.
//         </p>
//         <button className="cta-button">Learn More</button>
//       </section>
//     </div>
//   );
// };

// export default MainContent;
// src/components/MainContent.js
import React from "react";
import { FaRecycle, FaLaptop, FaBatteryHalf } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2"; // Chart.js for graphical visualizations
import "chart.js/auto"; // Import chart.js components
import "./MaainContent.css"; // Importing CSS for styling
import RecyclingProcess from "./RecyclingProcess";

const MainContent = () => {
  // Data for line chart and pie chart
  const lineChartData = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "E-Waste Generated (in Million Metric Tons)",
        data: [40, 50, 60, 70, 80],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ["Recycled", "Not Recycled"],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#45a049", "#e53935"],
      },
    ],
  };

  return (
    <div className="main-content-container">
      {/* Section 1: Introduction */}
      <section className="intro-section">
        <h2>Welcome to E-Waste Management</h2>
        <p>
          E-waste refers to discarded electronic devices such as old computers,
          phones, batteries, and more. With the rapid pace of technological
          advancements, proper e-waste management has become critical in
          reducing pollution and conserving valuable resources.
        </p>
      </section>

      {/* Section 2: E-Waste Statistics */}
      <section className="stats-section">
        <h2>E-Waste Statistics</h2>
        <div className="stats-container">
          <div className="stat-item">
            <h3>50 Million Metric Tons</h3>
            <p>of E-Waste generated globally every year</p>
          </div>
          <div className="stat-item">
            <h3>80%</h3>
            <p>of e-waste is not recycled properly</p>
          </div>
          <div className="stat-item">
            <h3>Over 100 Elements</h3>
            <p>present in modern electronics that can be recycled</p>
          </div>
        </div>
      </section>

      {/* Section 3: E-Waste Graphical Visualization */}
      <section className="chart-section">
        <h2>Global E-Waste Generation (2018-2022)</h2>
        <div className="chart-container">
          <Line
            data={lineChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
        <h2>E-Waste Recycling vs. Non-Recycling</h2>
        <div className="chart-container">
          <Pie
            data={pieChartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </section>

      {/* Section 4: E-Waste Recycling Process (Infographics) */}
      <section className="three-d-section">
        <h2>How E-Waste is Recycled !! </h2>
        <div className="three-d-container">
          <RecyclingProcess />
        </div>
      </section>

      {/* Section 5: Solutions for E-Waste */}
      <section className="solutions-section">
        <h2>Solutions for Managing E-Waste</h2>
        <div className="solutions-container">
          <div className="solution-item">
            <FaRecycle className="solution-icon" />
            <h3>Recycling Programs</h3>
            <p>
              Establishing efficient recycling programs to recover valuable
              materials from old electronics.
            </p>
          </div>
          <div className="solution-item">
            <FaLaptop className="solution-icon" />
            <h3>Extended Producer Responsibility (EPR)</h3>
            <p>
              Encouraging manufacturers to take responsibility for the entire
              lifecycle of their products.
            </p>
          </div>
          <div className="solution-item">
            <FaBatteryHalf className="solution-icon" />
            <h3>Consumer Awareness</h3>
            <p>
              Increasing consumer awareness about e-waste recycling and disposal
              methods.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: E-Waste Impact on the Environment */}
      <section className="impact-section">
        <h2>The Environmental Impact of E-Waste</h2>
        <p>
          Improper disposal of e-waste can lead to hazardous substances like
          lead, mercury, and cadmium being released into the environment. This
          can have severe consequences on soil, water, and human health. By
          recycling e-waste responsibly, we can prevent toxic pollutants and
          preserve the environment.
        </p>
      </section>

      {/* Section 7: Call to Action */}
      <section className="cta-section">
        <h2>Get Involved in E-Waste Management</h2>
        <p>
          Join us in making the planet cleaner and greener by properly recycling
          your old electronics.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/E-waste"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-button">Learn More</button>
        </a>
      </section>
    </div>
  );
};

export default MainContent;
