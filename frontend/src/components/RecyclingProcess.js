import React from "react";

const RecyclingProcess = () => {
  return (
    <div style={{ textAlign: "center", margin: "2rem 0" }}>
      <h2>3D Recycling Process</h2>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%", // Aspect ratio for 16:9
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          background: "#000",
          margin: "auto",
        }}
      >
        <iframe
          title="3D Recycling Process Video"
          src="https://www.youtube.com/embed/_Y2ePj3wr8M?si=4KZ1mMSyopQEZpnB"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            border: "none",
          }}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecyclingProcess;
