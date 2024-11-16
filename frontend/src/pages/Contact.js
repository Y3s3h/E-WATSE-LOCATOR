// import React from "react";

// const ContactUs = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h2>Contact Us</h2>
//         <p>
//           Get in touch with us for any queries related to e-waste management
//         </p>
//       </div>

//       <div style={styles.cardsContainer}>
//         {/* Contact Info Cards */}
//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <i className="fa fa-phone" style={styles.cardIcon}></i>
//             <h3>Phone</h3>
//           </div>
//           <p style={styles.cardContent}>+1 234 567 890</p>
//         </div>

//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <i className="fa fa-envelope" style={styles.cardIcon}></i>
//             <h3>Email</h3>
//           </div>
//           <p style={styles.cardContent}>@ewastemanagement.com</p>
//         </div>

//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <i className="fa fa-location-arrow" style={styles.cardIcon}></i>
//             <h3>Location</h3>
//           </div>
//           <p style={styles.cardContent}>123 E-Waste Avenue, Green City, 4567</p>
//         </div>

//         <div style={styles.card}>
//           <div style={styles.cardHeader}>
//             <i className="fa fa-clock" style={styles.cardIcon}></i>
//             <h3>Hours</h3>
//           </div>
//           <p style={styles.cardContent}>Mon - Fri: 9 AM - 6 PM</p>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div style={styles.formContainer}>
//         <h3 style={styles.formTitle}>Get in Touch</h3>
//         <form style={styles.form}>
//           <input
//             type="text"
//             placeholder="Your Name"
//             style={styles.inputField}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             style={styles.inputField}
//           />
//           <textarea
//             placeholder="Your Message"
//             style={styles.textareaField}
//           ></textarea>
//           <button type="submit" style={styles.submitButton}>
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     background: "linear-gradient(135deg, rgb(115, 158, 85), rgb(0, 153, 204))",
//     minHeight: "100vh",
//     padding: "2rem",
//     color: "white",
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: "3rem",
//   },
//   cardsContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     gap: "2rem",
//     marginBottom: "2rem",
//   },
//   card: {
//     background: "rgba(0, 0, 0, 0.3)",
//     borderRadius: "8px",
//     padding: "2rem",
//     width: "22%",
//     textAlign: "center",
//     color: "white",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
//   },
//   cardHeader: {
//     marginBottom: "1rem",
//   },
//   cardIcon: {
//     fontSize: "2rem",
//     color: "#f1c40f",
//   },
//   cardContent: {
//     fontSize: "1.2rem",
//     marginTop: "0.5rem",
//   },
//   formContainer: {
//     background: "rgba(0, 0, 0, 0.4)",
//     padding: "2rem",
//     borderRadius: "8px",
//     width: "50%",
//     margin: "0 auto",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
//   },
//   formTitle: {
//     textAlign: "center",
//     marginBottom: "1rem",
//     fontSize: "1.8rem",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "1rem",
//   },
//   inputField: {
//     padding: "1rem",
//     fontSize: "1rem",
//     borderRadius: "5px",
//     border: "none",
//     marginBottom: "1rem",
//     outline: "none",
//   },
//   textareaField: {
//     padding: "1rem",
//     fontSize: "1rem",
//     borderRadius: "5px",
//     border: "none",
//     height: "150px",
//     outline: "none",
//   },
//   submitButton: {
//     padding: "1rem",
//     backgroundColor: "#00b3b3",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "1rem",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// export default ContactUs;
import React, { useState } from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={{ color: "rgba(0,72,25,1)" }}>Contact Us</h2>
          <p>
            Get in touch with us for any queries related to e-waste management
          </p>
        </div>

        <div style={styles.cardsContainer}>
          {/* Contact Info Cards */}
          <div
            style={{
              ...styles.card,
              ...(hoveredCard === 1 && styles.cardHover),
            }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.cardHeader}>
              <i className="fa fa-phone" style={styles.cardIcon}></i>
              <h3>Phone</h3>
            </div>
            <p style={styles.cardContent}>7302752630</p>
          </div>

          <div
            style={{
              ...styles.card,
              ...(hoveredCard === 2 && styles.cardHover),
            }}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.cardHeader}>
              <i className="fa fa-envelope" style={styles.cardIcon}></i>
              <h3>Email</h3>
            </div>
            <p style={styles.cardContent}>yy6922341@gmail.com</p>
          </div>

          <div
            style={{
              ...styles.card,
              ...(hoveredCard === 3 && styles.cardHover),
            }}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.cardHeader}>
              <i className="fa fa-location-arrow" style={styles.cardIcon}></i>
              <h3>Location</h3>
            </div>
            <p style={styles.cardContent}>
              123 E-Waste Avenue, Green City, 4567
            </p>
          </div>

          <div
            style={{
              ...styles.card,
              ...(hoveredCard === 4 && styles.cardHover),
            }}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.cardHeader}>
              <i className="fa fa-clock" style={styles.cardIcon}></i>
              <h3>Hours</h3>
            </div>
            <p style={styles.cardContent}>Mon - Fri: 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h3 style={styles.formTitle}>Get in Touch</h3>
          <form style={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              style={styles.inputField}
            />
            <input
              type="email"
              placeholder="Your Email"
              style={styles.inputField}
            />
            <textarea
              placeholder="Your Message"
              style={styles.textareaField}
            ></textarea>
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, rgb(115, 158, 85), rgb(0, 153, 204))",
    minHeight: "100vh",
    padding: "2rem",
    color: "white",
  },
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
    marginBottom: "2rem",
  },
  card: {
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
    padding: "2rem",
    width: "22%",
    textAlign: "center",
    color: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
    transition: "transform 0.3s ease-in-out",
  },
  cardHeader: {
    marginBottom: "1rem",
  },
  cardIcon: {
    fontSize: "2rem",
    color: "#f1c40f",
  },
  cardContent: {
    fontSize: "1.2rem",
    marginTop: "0.5rem",
  },
  cardHover: {
    transform: "scale(1.1)",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.8)",
  },
  formContainer: {
    background: "rgba(0, 0, 0, 0.4)",
    padding: "2rem",
    borderRadius: "8px",
    width: "50%",
    margin: "0 auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.8rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputField: {
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    marginBottom: "1rem",
    outline: "none",
  },
  textareaField: {
    padding: "1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    height: "150px",
    outline: "none",
  },
  submitButton: {
    padding: "1rem",
    backgroundColor: "#00b3b3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default ContactUs;
