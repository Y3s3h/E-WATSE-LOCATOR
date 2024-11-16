// // components/Footer.js

// import React from "react";
// import {
//   FaLinkedin,
//   FaInstagram,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa"; // Import icons

// function Footer() {
//   return (
//     <footer style={footerStyle}>
//       <div style={footerContentStyle}>
//         <div style={companyInfoStyle}>
//           <h2 style={companyTitleStyle}>E-Waste Management</h2>
//           <p style={companyDescriptionStyle}>
//             Leading the way in environmentally friendly e-waste recycling and
//             disposal. We help reduce the environmental impact of electronic
//             waste by providing sustainable recycling solutions.
//           </p>
//         </div>

//         <div style={contactInfoStyle}>
//           <h3 style={contactTitleStyle}>Contact Us</h3>
//           <div style={contactDetailsStyle}>
//             <div style={contactItemStyle}>
//               <FaPhoneAlt style={iconStyle} />
//               <span style={contactTextStyle}>+123-456-7890</span>
//             </div>
//             <div style={contactItemStyle}>
//               <FaEnvelope style={iconStyle} />
//               <span style={contactTextStyle}>info@ewastemanagement.com</span>
//             </div>
//           </div>
//         </div>

//         <div style={socialMediaStyle}>
//           <h3 style={socialTitleStyle}>Follow Us</h3>
//           <div style={socialIconsStyle}>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={socialIconStyle}
//             >
//               <FaLinkedin style={socialIconSize} />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={socialIconStyle}
//             >
//               <FaInstagram style={socialIconSize} />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div style={footerBottomStyle}>
//         <p style={footerTextStyle}>
//           © 2024 E-Waste Management. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// const footerStyle = {
//   backgroundColor: "#222",
//   color: "#fff",
//   padding: "40px 20px",
//   fontSize: "16px",
// };

// const footerContentStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   gap: "40px",
//   marginBottom: "20px",
// };

// const companyInfoStyle = {
//   flex: "1",
// };

// const companyTitleStyle = {
//   fontSize: "24px",
//   fontWeight: "bold",
//   marginBottom: "10px",
// };

// const companyDescriptionStyle = {
//   fontSize: "16px",
//   lineHeight: "1.6",
// };

// const contactInfoStyle = {
//   flex: "1",
// };

// const contactTitleStyle = {
//   fontSize: "20px",
//   fontWeight: "bold",
//   marginBottom: "10px",
// };

// const contactDetailsStyle = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "15px",
// };

// const contactItemStyle = {
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
// };

// const contactTextStyle = {
//   fontSize: "16px",
// };

// const iconStyle = {
//   fontSize: "20px",
//   color: "#fff",
// };

// const socialMediaStyle = {
//   flex: "1",
// };

// const socialTitleStyle = {
//   fontSize: "20px",
//   fontWeight: "bold",
//   marginBottom: "10px",
// };

// const socialIconsStyle = {
//   display: "flex",
//   gap: "20px",
// };

// const socialIconStyle = {
//   color: "#fff",
//   textDecoration: "none",
// };

// const socialIconSize = {
//   fontSize: "24px",
// };

// const footerBottomStyle = {
//   textAlign: "center",
//   paddingTop: "20px",
//   borderTop: "1px solid #444",
// };

// const footerTextStyle = {
//   fontSize: "14px",
// };

// export default Footer;
// components/Footer.js

import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={companyInfoStyle}>
          <h2 style={companyTitleStyle}>E-Waste Management</h2>
          <p style={companyDescriptionStyle}>
            Leading the way in environmentally friendly e-waste recycling and
            disposal. We help reduce the environmental impact of electronic
            waste by providing sustainable recycling solutions.
          </p>
        </div>

        <div style={contactInfoStyle}>
          <h3 style={contactTitleStyle}>Contact Us</h3>
          <div style={contactDetailsStyle}>
            <div style={contactItemStyle}>
              <FaPhoneAlt style={iconStyle} />
              <span style={contactTextStyle}>+91 7302753630</span>
            </div>
            <div style={contactItemStyle}>
              <FaEnvelope style={iconStyle} />
              <span style={contactTextStyle}>info@ewastemanagement.com</span>
            </div>
          </div>
        </div>

        <div style={socialMediaStyle}>
          <h3 style={socialTitleStyle}>Follow Us</h3>
          <div style={socialIconsStyle}>
            <a
              href="https://www.linkedin.com/in/yash-yadav-094b0027b"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
            >
              <FaLinkedin style={socialIconSize} />
            </a>
            <a
              href="https://www.instagram.com/itz_yash_here730?igsh=YXkyNnJycmQxb3Jy"
              target="_blank"
              rel="noopener noreferrer"
              style={socialIconStyle}
            >
              <FaInstagram style={socialIconSize} />
            </a>
          </div>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <p style={footerTextStyle}>
          © 2024 E-Waste Management. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: "#222",
  color: "#fff",
  padding: "40px 20px",
  fontSize: "16px",
  marginTop: "auto", // Ensures footer is pushed to the bottom
  width: "100%",
};

const footerContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  marginBottom: "20px",
};

const companyInfoStyle = {
  flex: "1",
};

const companyTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const companyDescriptionStyle = {
  fontSize: "16px",
  lineHeight: "1.6",
};

const contactInfoStyle = {
  flex: "1",
};

const contactTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const contactDetailsStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const contactItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const contactTextStyle = {
  fontSize: "16px",
};

const iconStyle = {
  fontSize: "20px",
  color: "#fff",
};

const socialMediaStyle = {
  flex: "1",
};

const socialTitleStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const socialIconsStyle = {
  display: "flex",
  gap: "20px",
};

const socialIconStyle = {
  color: "#fff",
  textDecoration: "none",
};

const socialIconSize = {
  fontSize: "24px",
};

const footerBottomStyle = {
  textAlign: "center",
  paddingTop: "20px",
  borderTop: "1px solid #444",
};

const footerTextStyle = {
  fontSize: "14px",
};

export default Footer;
