// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       setError("Both fields are required!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Login Successful!");
//         setError("");
//         localStorage.setItem("token", data.token); // Store token
//         window.location.href = "/home"; // Redirect on success
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div style={loginPageContainer}>
//       <div style={loginCard}>
//         <h2>Login</h2>
//         {error && <p style={errorStyle}>{error}</p>}
//         <form onSubmit={handleLogin}>
//           <div style={inputGroup}>
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={inputStyle}
//               required
//             />
//           </div>
//           <div style={inputGroup}>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={inputStyle}
//               required
//             />
//           </div>
//           <button type="submit" style={buttonStyle}>
//             Login
//           </button>
//         </form>
//         <div style={signupRedirect}>
//           <p>
//             Don't have an account?{" "}
//             <a href="/register" style={{ textDecoration: "none" }}>
//               Register
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles for the Login page
// const loginPageContainer = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   backgroundColor: "#f4f4f9",
// };

// const loginCard = {
//   backgroundColor: "white",
//   padding: "30px",
//   borderRadius: "8px",
//   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//   width: "400px",
//   textAlign: "center",
// };

// const inputGroup = {
//   marginBottom: "20px",
//   textAlign: "left",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   marginTop: "5px",
//   borderRadius: "5px",
//   border: "1px solid #ccc",
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "12px",
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   fontSize: "16px",
// };

// const errorStyle = {
//   color: "red",
//   fontSize: "14px",
// };

// const signupRedirect = {
//   marginTop: "20px",
//   fontSize: "14px",
// };

// export default Login;

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Add state for success message

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Both fields are required!");
      setSuccessMessage(""); // Clear success message if error occurs
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Login Successful!"); // Set success message
        setError(""); // Clear any previous error
        localStorage.setItem("token", data.token); // Store token
        setTimeout(() => {
          window.location.href = "/home"; // Redirect after a brief delay
        }, 2000); // Delay to show the success message
      } else {
        setError(data.message || "Login failed");
        setSuccessMessage(""); // Clear success message if login fails
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccessMessage(""); // Clear success message on error
    }
  };

  return (
    <div style={loginPageContainer}>
      <div style={loginCard}>
        <h2>Login</h2>
        {error && <p style={errorStyle}>{error}</p>}
        {successMessage && <p style={successStyle}>{successMessage}</p>}{" "}
        {/* Display success message */}
        <form onSubmit={handleLogin}>
          <div style={inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <div style={signupRedirect}>
          <p>
            Don't have an account?{" "}
            <a href="/register" style={{ textDecoration: "none" }}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles for the Login page
const loginPageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f4f4f9",
};

const loginCard = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  width: "400px",
  textAlign: "center",
};

const inputGroup = {
  marginBottom: "20px",
  textAlign: "left",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
};

const successStyle = {
  color: "green",
  fontSize: "14px",
};

const signupRedirect = {
  marginTop: "20px",
  fontSize: "14px",
};

export default Login;
