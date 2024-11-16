// src/components/ProfileAvatar.js
import React from "react";
import { Link } from "react-router-dom";

function ProfileAvatar() {
  return (
    <div>
      <Link to="/profile">
        <img
          src="/profilelogo2.jpg"
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Link>
    </div>
  );
}

export default ProfileAvatar;
