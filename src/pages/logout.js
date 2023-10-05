import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { showToast } from "../components/toastService";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    // toast.error("logout successful", {
    //   autoClose: 3000,
    // });
    showToast("Logout successful", "success");
  };

  return (
    <div className="w-full p-5">
      <div>
        <div
          className="btnss inline-block cursor-pointer"
          onClick={handleLogout}
        >
          <span>Logout</span>
          <div className="star-1">
            <svg
              viewBox="0 0 784.11 815.53"
              className="star-svg"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
              }}
            >
              <path
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                className="fil0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
