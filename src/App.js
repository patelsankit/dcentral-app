import "./App.css";
import Login from "./login";
import { Routes, Route, Router } from "react-router-dom";
import Protected from "./protected";
import PrivateRoute from "./privateroute";

const App = () => {
  // Example authentication check logic
  const isAuthenticated = () => {
    // Replace this with your actual authentication check logic
    // e.g., check if the user has a valid authentication token or session
    const authToken = localStorage.getItem("authToken");
    return authToken !== null;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<Protected />} />
      </Routes>
    </>
  );
};

export default App;
