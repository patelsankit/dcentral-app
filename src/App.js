import "./App.css";
import Login from "./pages/login";
import { Routes, Route, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/home";
import Header from "./components/Header";
import News from "./pages/News";
const App = () => {
  return (
    <>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};

export default App;
