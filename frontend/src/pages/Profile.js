// import React, { useState } from "react";

// function Profile() {
//   const [carbonContent, setCarbonContent] = useState(null); // Use null to differentiate between initial and calculated state
//   const [metalData] = useState({
//     Copper: 20,
//     Silver: 15,
//     Nickel: 25,
//     Mercury: 10,
//   });

//   const calculateCarbonContent = () => {
//     const total = Object.values(metalData).reduce((a, b) => a + b, 0);
//     setCarbonContent((total * 0.5).toFixed(2)); // Calculate carbon content as 50% of total
//   };

//   return (
//     <div style={styles.container}>
//       {/* Navbar */}
//       <header style={styles.navbar}>
//         <h1 style={styles.title}>E-Waste Profile</h1>
//       </header>

//       <div style={styles.content}>
//         {/* Sidebar */}
//         <aside style={styles.sidebar}>
//           <div style={styles.profile}>
//             <img
//               src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
//               alt="Profile"
//               style={styles.profileImg}
//             />
//             <h3 style={styles.profileName}>EcoTech Innovators</h3>
//           </div>
//           <nav style={styles.nav}>
//             <a href="#profile" style={styles.navLink}>
//               Profile
//             </a>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main style={styles.main}>
//           {/* Identity Section */}
//           <section style={styles.card}>
//             <h2 style={styles.sectionTitle}>Identity</h2>
//             <table style={styles.table}>
//               <tbody>
//                 <tr>
//                   <td>Name</td>
//                   <td>:</td>
//                   <td>Eco Innovators</td>
//                 </tr>
//                 <tr>
//                   <td>Email</td>
//                   <td>:</td>
//                   <td>yy7272xxx.com</td>
//                 </tr>
//                 <tr>
//                   <td>Address</td>
//                   <td>:</td>
//                   <td>Ghaziabad, UP</td>
//                 </tr>
//                 <tr>
//                   <td>Phone No.</td>
//                   <td>:</td>
//                   <td>9761xxxxxx</td>
//                 </tr>
//               </tbody>
//             </table>
//           </section>

//           {/* Credit Points Section */}
//           <section style={styles.section}>
//             <h2 style={styles.sectionTitle}>Your Credit Points</h2>
//             <div style={styles.pointsContainer}>
//               <span style={styles.pointsValue}>10</span>
//               <span> Points</span>
//             </div>
//             <p>Credit Points based on metals in decomposed e-waste</p>
//           </section>

//           {/* Metal Composition Section */}
//           <section style={styles.section}>
//             <h2 style={styles.sectionTitle}>Metal Composition</h2>
//             {Object.entries(metalData).map(([metal, value]) => (
//               <div key={metal} style={styles.progressBarContainer}>
//                 <span>{metal}</span>
//                 <div style={styles.progressBar}>
//                   <div style={{ ...styles.progressFill, width: `${value}%` }} />
//                 </div>
//                 <span>{value}%</span>
//               </div>
//             ))}
//           </section>

//           {/* Carbon Content Section */}
//           <section style={styles.section}>
//             <h2 style={styles.sectionTitle}>Calculate Carbon Content</h2>
//             {carbonContent === null ? (
//               <button onClick={calculateCarbonContent} style={styles.button}>
//                 Calculate
//               </button>
//             ) : (
//               <p style={styles.carbonResult}>
//                 Estimated Carbon Content: {carbonContent}%
//               </p>
//             )}
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     fontFamily: "'Poppins', sans-serif",
//     backgroundColor: "#f3f4f6",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//   },
//   navbar: {
//     backgroundColor: "#FFFFFF",
//     padding: "15px",
//     textAlign: "center",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//   },
//   title: { color: "black", fontSize: "24px", margin: 0 },
//   content: { display: "flex", flex: 1 },
//   sidebar: {
//     width: "25%",
//     backgroundColor: "#ffffff",
//     padding: "20px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//   },
//   profile: { textAlign: "center", marginBottom: "20px" },
//   profileImg: { borderRadius: "50%", width: "120px", height: "120px" },
//   profileName: { margin: "10px 0", color: "#333" },
//   nav: { marginTop: "20px" },
//   navLink: {
//     display: "block",
//     padding: "10px 0",
//     color: "#283593",
//     textDecoration: "none",
//     fontWeight: "bold",
//   },
//   main: { flex: 1, padding: "20px", overflowY: "auto" },
//   card: {
//     backgroundColor: "#ffffff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     marginBottom: "20px",
//   },
//   table: { width: "100%", fontSize: "16px", borderSpacing: "0 10px" },
//   section: { marginBottom: "20px" },
//   sectionTitle: { fontSize: "20px", marginBottom: "10px" },
//   pointsContainer: { fontSize: "28px", fontWeight: "bold", color: "#283593" },
//   progressBarContainer: {
//     display: "flex",
//     alignItems: "center",
//     margin: "10px 0",
//   },
//   progressBar: {
//     width: "70%",
//     height: "10px",
//     backgroundColor: "#e0e0e0",
//     margin: "0 10px",
//     borderRadius: "5px",
//   },
//   progressFill: {
//     height: "100%",
//     backgroundColor: "#283593",
//     borderRadius: "5px",
//   },
//   button: {
//     padding: "10px 20px",
//     backgroundColor: "#283593",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     color: "#fff",
//     fontSize: "16px",
//   },
//   carbonResult: { marginTop: "13px", fontSize: "18px", color: "red" },
// };

// export default Profile;

import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

function Profile() {
  const [carbonContent, setCarbonContent] = useState(null);
  const [metalData] = useState({
    Copper: 20,
    Silver: 15,
    Nickel: 25,
    Mercury: 10,
  });

  const calculateCarbonContent = () => {
    const total = Object.values(metalData).reduce((a, b) => a + b, 0);
    setCarbonContent((total * 0.5).toFixed(2));
  };

  const chartData = {
    labels: Object.keys(metalData),
    datasets: [
      {
        data: Object.values(metalData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <h1 style={styles.title}>E-Waste Profile</h1>
      </header>

      <div style={styles.content}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.profile}>
            <img
              src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png"
              alt="Profile"
              style={styles.profileImg}
            />
            <h3 style={styles.profileName}>EcoTech Innovators</h3>
          </div>
          <nav style={styles.nav}>
            <a href="#profile" style={styles.navLink}>
              Profile
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={styles.main}>
          {/* Identity Section */}
          <section style={styles.card}>
            <h2 style={styles.sectionTitle}>Identity</h2>
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>Eco Innovators</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>yy7272xxx.com</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>:</td>
                  <td>Ghaziabad, UP</td>
                </tr>
                <tr>
                  <td>Phone No.</td>
                  <td>:</td>
                  <td>9761xxxxxx</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Credit Points Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Your Credit Points</h2>
            <div style={styles.pointsContainer}>
              <span style={styles.pointsValue}>10</span>
              <span> Points</span>
            </div>
            <p>Credit Points based on metals in decomposed e-waste</p>
          </section>

          {/* Pie Chart Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Metal Composition Pie Chart</h2>
            <div style={styles.pieChartContainer}>
              <Pie data={chartData} width={200} height={200} />
            </div>
          </section>

          {/* Carbon Content Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Calculate Carbon Content</h2>
            {carbonContent === null ? (
              <button onClick={calculateCarbonContent} style={styles.button}>
                Calculate
              </button>
            ) : (
              <p style={styles.carbonResult}>
                Estimated Carbon Content: {carbonContent}%
              </p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f3f4f6",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#FFFFFF",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  title: { color: "black", fontSize: "24px", margin: 0 },
  content: { display: "flex", flex: 1 },
  sidebar: {
    width: "25%",
    backgroundColor: "#ffffff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  profile: { textAlign: "center", marginBottom: "20px" },
  profileImg: { borderRadius: "50%", width: "120px", height: "120px" },
  profileName: { margin: "10px 0", color: "#333" },
  nav: { marginTop: "20px" },
  navLink: {
    display: "block",
    padding: "10px 0",
    color: "#283593",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: { flex: 1, padding: "20px", overflowY: "auto" },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  table: { width: "100%", fontSize: "16px", borderSpacing: "0 10px" },
  section: { marginBottom: "20px" },
  sectionTitle: { fontSize: "20px", marginBottom: "10px" },
  pointsContainer: { fontSize: "28px", fontWeight: "bold", color: "#283593" },
  pieChartContainer: {
    width: "200px",
    height: "200px",
    margin: "0 auto",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#283593",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "16px",
  },
  carbonResult: { marginTop: "13px", fontSize: "18px", color: "red" },
};

export default Profile;
