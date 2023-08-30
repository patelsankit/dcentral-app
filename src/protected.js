// Protected.js

import React from "react";
import Logout from "./logout";
// import { useNavigate } from "react-router-dom";

const Protected = () => {
  // const navigate = useNavigate();
  // const check = localStorage.getItem('isAuthorized');
  // if(check != 'true'){
  //   alert("don't go to that page")
  //     navigate("/login");
  // }
  return (
    <div>
      <h1>Welcome to the protected page!</h1>
      <Logout />
    </div>
  );
};

export default Protected;
