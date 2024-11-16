import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import { HashRouter as Router } from "react-router-dom";
// import Footer from "./components/Footer"; // Import Footer component
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import StaffMembers from "./pages/StaffMembers";
import FutureAspects from "./pages/FutureAspects";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Locator from "./pages/Locator";
import Profile from "./pages/Profile";
import ContactUs from "./pages/Contact";
import "font-awesome/css/font-awesome.min.css";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div style={appContainerStyle}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/staff-members" element={<StaffMembers />} />
            <Route path="/future-aspects" element={<FutureAspects />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/locator" element={<Locator />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

// Flexbox layout for the full page structure
const appContainerStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Ensures the page takes full height
};

const mainContentStyle = {
  flex: "1", // Takes up the remaining space between header and footer
  padding: "20px",
  textAlign: "center",
};

export default App;
