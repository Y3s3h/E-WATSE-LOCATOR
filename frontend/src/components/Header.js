// import React from "react";
// import { Link } from "react-router-dom";
// import ProfileAvatar from "./ProfileAvatar";

// function Header() {
//   return (
//     <nav style={styles.nav}>
//       <div style={styles.logoContainer}>
//         <Link to="/" style={styles.logo}>
//           <img
//             src="/mainlogoi.jpg"
//             alt="Logo"
//             style={{
//               width: "80px",
//               height: "80px",
//               borderRadius: "50%",
//               objectFit: "cover",
//             }}
//           />
//         </Link>
//       </div>
//       <div style={styles.linkContainer}>
//         <Link to="/home" style={styles.link}>
//           Home
//         </Link>
//         <div style={styles.dropdown}>
//           <Link to="/mission" style={styles.link}>
//             Our Mission
//           </Link>
//           <Link to="/staff-members" style={styles.link}>
//             Staff Members
//           </Link>
//           <Link to="/future-aspects" style={styles.link}>
//             Future Aspects
//           </Link>
//         </div>
//         <Link to="/privacy-policy" style={styles.link}>
//           Privacy Policy
//         </Link>
//         <Link to="/contactus" style={styles.link}>
//           Contact Us
//         </Link>
//         <Link to="/login" style={styles.link}>
//           Login
//         </Link>
//         <Link to="/locator" style={styles.locatorButton}>
//           Locator
//         </Link>
//         <ProfileAvatar />
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#FAF6E3",
//     padding: "10px 20px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   logoContainer: {
//     display: "flex",
//     alignItems: "center",
//   },
//   logo: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     color: "#333",
//     textDecoration: "none",
//   },
//   linkContainer: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//   },
//   link: {
//     color: "#333",
//     textDecoration: "none",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     padding: "5px 10px",
//   },
//   locatorButton: {
//     padding: "8px 15px",
//     backgroundColor: "#007bff",
//     color: "white",
//     borderRadius: "5px",
//     textDecoration: "none",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     border: "none",
//     cursor: "pointer",
//   },
//   dropdown: {
//     position: "relative",
//     display: "inline-block",
//   },
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token exists in localStorage to determine login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage and update login status
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Link to="/" style={styles.logo}>
          <img
            src="/mainlogoi.jpg"
            alt="Logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Link>
      </div>
      <div style={styles.linkContainer}>
        <Link to="/home" style={styles.link}>
          Home
        </Link>
        <div style={styles.dropdown}>
          <Link to="/mission" style={styles.link}>
            Our Mission
          </Link>
          <Link to="/staff-members" style={styles.link}>
            Staff Members
          </Link>
          <Link to="/future-aspects" style={styles.link}>
            Future Aspects
          </Link>
        </div>
        <Link to="/privacy-policy" style={styles.link}>
          Privacy Policy
        </Link>
        <Link to="/contactus" style={styles.link}>
          Contact Us
        </Link>
        <Link to="/locator" style={styles.locatorButton}>
          Locator
        </Link>
        {isLoggedIn ? (
          <>
            {/* <Link to="/profile" style={styles.link}>
              Profile
            </Link> */}
            {/* <button onClick={handleLogout} style={styles.link}>
              Logout
            </button> */}
            <button
              onClick={handleLogout}
              style={{
                color: "#fff",
                backgroundColor: "#007bff", // Bootstrap blue
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>

            {/* <Link to="/profile" style={styles.link}>
              Profile
            </Link> */}
            <ProfileAvatar />
          </>
        ) : (
          // <Link to="/login" style={styles.link}>
          //   Login
          // </Link>
          <Link
            to="/login"
            style={{
              color: "#fff",
              backgroundColor: "#007bff", // Bootstrap blue
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              display: "inline-block", // Ensures it behaves like a button
              textAlign: "center",
            }}
          >
            Login
          </Link>
        )}
        {/* <Link to="/locator" style={styles.locatorButton}>
          Locator
        </Link> */}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAF6E3",
    padding: "10px 20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#333",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "5px 10px",
  },
  locatorButton: {
    padding: "8px 15px",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  dropdown: {
    position: "relative",
    display: "inline-block",
  },
};

export default Header;
