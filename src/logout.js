// Logout.js

import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    // Perform logout logic here
    // For example, clear any user authentication tokens or session information

    // Redirect the user to the login page after logout
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
