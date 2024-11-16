// // src/pages/FutureAspects.js
// // import React from "react";

// // function FutureAspects() {
// //   return <h1>Future Aspects</h1>;
// // }

// // export default FutureAspects;
// import React, { useEffect } from "react";
// import "./FutureAspects.css";
// import * as THREE from "three";

// const FutureAspects = () => {
//   useEffect(() => {
//     // Initialize Three.js Scene
//     const canvas = document.getElementById("bg-canvas");
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x0a0a2e, 1);

//     // Create particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 3000;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 60;
//     }

//     particlesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(posArray, 3)
//     );

//     // Create gradient material
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.02,
//       vertexColors: true,
//     });

//     // Add colors to particles
//     const colors = new Float32Array(particlesCount * 3);
//     for (let i = 0; i < particlesCount * 3; i += 3) {
//       const mixValue = Math.random();
//       colors[i] = 0; // R
//       colors[i + 1] = mixValue; // G
//       colors[i + 2] = 1 - mixValue; // B
//     }
//     particlesGeometry.setAttribute(
//       "color",
//       new THREE.BufferAttribute(colors, 3)
//     );

//     const particlesMesh = new THREE.Points(
//       particlesGeometry,
//       particlesMaterial
//     );
//     scene.add(particlesMesh);

//     camera.position.z = 30;

//     // Animation
//     let mouseX = 0;
//     let mouseY = 0;

//     const onMouseMove = (event) => {
//       mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     document.addEventListener("mousemove", onMouseMove);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       particlesMesh.rotation.x += 0.001;
//       particlesMesh.rotation.y += 0.001;

//       particlesMesh.rotation.x +=
//         (mouseY * 0.1 - particlesMesh.rotation.x) * 0.1;
//       particlesMesh.rotation.y +=
//         (mouseX * 0.1 - particlesMesh.rotation.y) * 0.1;

//       renderer.render(scene, camera);
//     };

//     // Handle window resize
//     const onResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", onResize);

//     animate();

//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <div className="future-container">
//       <canvas id="bg-canvas"></canvas>
//       <div className="content-overlay">
//         <header className="header">
//           <h1 className="main-title">The Future of E-Waste Management</h1>
//           <p className="subtitle">
//             Transforming electronic waste into valuable resources through
//             innovative technologies and sustainable practices
//           </p>
//         </header>

//         <div className="features-grid">
//           <FeatureCard
//             icon="🤖"
//             title="AI-Powered Recycling"
//             statNumber="98%"
//             statLabel1="Recovery Rate"
//             description="Advanced artificial intelligence systems that revolutionize the sorting and processing of electronic waste, maximizing material recovery and minimizing environmental impact."
//           />
//           <FeatureCard
//             icon="♻"
//             title="Circular Economy"
//             statNumber="100%"
//             statLabel1="Reusable Materials"
//             description="Implementation of closed-loop systems where electronic products are designed for complete disassembly and reuse, eliminating waste entirely."
//           />
//           <FeatureCard
//             icon="📱"
//             title="Smart Collection"
//             statNumber="24/7"
//             statLabel1="Automated Processing"
//             description="IoT-enabled collection points with real-time tracking and automated sorting, making responsible e-waste disposal easier than ever."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({ icon, title, statNumber, statLabel1, description }) => (
//   <div className="feature-card">
//     <div className="feature-icon">{icon}</div>
//     <h3 className="feature-title">{title}</h3>
//     <div className="stat-number1">{statNumber}</div>
//     <div className="stat-label1">{statLabel1}</div>
//     <p className="feature-description">{description}</p>
//     <a
//       href="https://www.youtube.com/watch?v=On5WUCUNmfc"
//       className="cta-button"
//     >
//       Learn More
//     </a>
//   </div>
// );

// export default FutureAspects;
import React, { useEffect } from "react";
import "./FutureAspects.css";
import * as THREE from "three";
import Footer from "../components/Footer";
// import Footer from "../components/Footer";

const FutureAspects = () => {
  useEffect(() => {
    // Initialize Three.js Scene
    const canvas = document.getElementById("bg-canvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0a2e, 1);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Create gradient material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
    });

    // Add colors to particles
    const colors = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const mixValue = Math.random();
      colors[i] = 0; // R
      colors[i + 1] = mixValue; // G
      colors[i + 2] = 1 - mixValue; // B
    }
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 30;

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;

      particlesMesh.rotation.x +=
        (mouseY * 0.1 - particlesMesh.rotation.x) * 0.1;
      particlesMesh.rotation.y +=
        (mouseX * 0.1 - particlesMesh.rotation.y) * 0.1;

      renderer.render(scene, camera);
    };

    // Handle window resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="future-container">
        <canvas id="bg-canvas"></canvas>
        <div className="content-overlay">
          <header className="header">
            <h1 className="main-title">The Future of E-Waste Management</h1>
            <p className="subtitle">
              Transforming electronic waste into valuable resources through
              innovative technologies and sustainable practices
            </p>
          </header>

          <div className="features-grid">
            <FeatureCard
              icon="🤖"
              title="AI-Powered Recycling"
              statNumber="98%"
              statLabel1="Recovery Rate"
              description="Advanced artificial intelligence systems that revolutionize the sorting and processing of electronic waste, maximizing material recovery and minimizing environmental impact."
              videoLink="https://www.youtube.com/watch?v=On5WUCUNmfc&t=11s" // Replace with actual link
            />
            <FeatureCard
              icon="♻"
              title="Circular Economy"
              statNumber="100%"
              statLabel1="Reusable Materials"
              description="Implementation of closed-loop systems where electronic products are designed for complete disassembly and reuse, eliminating waste entirely."
              videoLink="https://www.youtube.com/watch?v=lhMooyLGWkc&t=6s" // Replace with actual link
            />
            <FeatureCard
              icon="📱"
              title="Smart Collection"
              statNumber="24/7"
              statLabel1="Automated Processing"
              description="IoT-enabled collection points with real-time tracking and automated sorting, making responsible e-waste disposal easier than ever."
              videoLink="https://www.youtube.com/watch?v=S2lmPIa1iWE" // Replace with actual link
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const FeatureCard = ({
  icon,
  title,
  statNumber,
  statLabel1,
  description,
  videoLink,
}) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <div className="stat-number1">{statNumber}</div>
    <div className="stat-label1">{statLabel1}</div>
    <p className="feature-description">{description}</p>
    <a
      href={videoLink}
      className="cta-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn More
    </a>
  </div>
);

export default FutureAspects;
