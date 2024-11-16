// import React, { useState } from "react";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     console.log("Password: ", password);
//     console.log("Confirm Password: ", confirmPassword);
//     console.log("Password Length: ", password.length);
//     console.log("Confirm Password Length: ", confirmPassword.length);
//     // Trim whitespace from email and passwords
//     const trimmedEmail = email.trim();
//     const trimmedPassword = password.trim();
//     const trimmedConfirmPassword = confirmPassword.trim();

//     // Check if any fields are empty or passwords don't match
//     if (
//       trimmedEmail === "" ||
//       trimmedPassword === "" ||
//       trimmedConfirmPassword === ""
//     ) {
//       setError("All fields are required!");
//       return;
//     } else if (trimmedPassword !== trimmedConfirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: trimmedEmail,
//           password: trimmedPassword,
//           confirmPassword: trimmedConfirmPassword, // Send confirmPassword to backend
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Registration Successful!");
//         setError("");
//         window.location.href = "/login"; // Redirect on successful registration
//       } else {
//         setError(data.message || "Registration failed");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div style={registerPageContainer}>
//       <div style={registerCard}>
//         <h2>Register</h2>
//         {error && <p style={errorStyle}>{error}</p>}
//         <form onSubmit={handleRegister}>
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
//           <div style={inputGroup}>
//             <label htmlFor="confirmPassword">Confirm Password:</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               style={inputStyle}
//               required
//             />
//           </div>
//           <button type="submit" style={buttonStyle}>
//             Register
//           </button>
//         </form>
//         <div style={loginRedirect}>
//           <p>
//             Already have an account?{" "}
//             <a href="/login" style={{ textDecoration: "none" }}>
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles for the Register page
// const registerPageContainer = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "100vh",
//   backgroundColor: "#f4f4f9",
// };

// const registerCard = {
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

// const loginRedirect = {
//   marginTop: "20px",
//   fontSize: "14px",
// };

// export default Register;

import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log("Password: ", password);
    console.log("Confirm Password: ", confirmPassword);
    console.log("Password Length: ", password.length);
    console.log("Confirm Password Length: ", confirmPassword.length);

    // Trim whitespace from email and passwords
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Check if any fields are empty or passwords don't match
    if (
      trimmedEmail === "" ||
      trimmedPassword === "" ||
      trimmedConfirmPassword === ""
    ) {
      setError("All fields are required!");
      setSuccessMessage(""); // Clear success message if there's an error
      return;
    } else if (trimmedPassword !== trimmedConfirmPassword) {
      setError("Passwords do not match!");
      setSuccessMessage(""); // Clear success message if passwords don't match
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          password: trimmedPassword,
          confirmPassword: trimmedConfirmPassword, // Send confirmPassword to backend
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Registration Successful! Please log in."); // Success message
        setError(""); // Clear error message
        setTimeout(() => {
          window.location.href = "/login"; // Redirect to login after success
        }, 2000); // Wait 2 seconds before redirecting
      } else {
        setError(data.message || "Registration failed");
        setSuccessMessage(""); // Clear success message if registration failed
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccessMessage(""); // Clear success message on error
    }
  };

  return (
    <div style={registerPageContainer}>
      <div style={registerCard}>
        <h2>Register</h2>
        {error && <p style={errorStyle}>{error}</p>} {/* Error message */}
        {successMessage && <p style={successStyle}>{successMessage}</p>}{" "}
        {/* Success message */}
        <form onSubmit={handleRegister}>
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
          <div style={inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        <div style={loginRedirect}>
          <p>
            Already have an account?{" "}
            <a href="/login" style={{ textDecoration: "none" }}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Styles for the Register page
const registerPageContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f4f4f9",
};

const registerCard = {
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

const loginRedirect = {
  marginTop: "20px",
  fontSize: "14px",
};

export default Register;
