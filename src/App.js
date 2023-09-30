import "./App.css";
import Login from "./login";
import { Routes, Route, Router } from "react-router-dom";
import PrivateRoute from "./privateroute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "./components/toastService";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./home";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToastContainer position="top-right" />

        {/* another way */}
      </div>
    </>
  );
};

export default App;
