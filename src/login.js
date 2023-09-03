import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imageone from "./assets/images/bg.svg";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const validUsername = "patelsankit16@gmail.com";
    const validPassword = "9574540106";

    if (loginUsername === validUsername && loginPassword === validPassword) {
      console.log("User authenticated");
      navigate("/protected");
    } else {
      setLoginUsername("");
      setLoginPassword("");

      if (!toastVisible) {
        setToastVisible(true);
        toast.error("Invalid username or password", {
          autoClose: 3000,
          onClose: () => setToastVisible(false),
        });
      }
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Implement your signup logic here
    // You can add API calls or any other signup process

    // Clear form inputs
    setSignupUsername("");
    setSignupPassword("");

    // For demonstration purposes, display a success message
    toast.success("signup successfully", {
      autoClose: 3000,
      onClose: () => setToastVisible(false),
    });
  };

  return (
    <div className="min-h-screen flex p-5 sm:p-10">
      <div className="hidden lg:block">
        <img className="w-full h-full" src={imageone} alt={"logo"} />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="bg-white p-8 shadow-md rounded-md w-96 md:w-[450px]">
          <div className="flex justify-between mb-4">
            <button
              className={`${
                activeTab === "login"
                  ? "text-blue-500 border-b-4 border-[#7654ff] rounded-full"
                  : "text-gray-200 border-b border-[#E5E6F0] rounded-full"
              } px-4 py-2 focus:outline-none uppercase w-1/2`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
            <button
              className={`${
                activeTab === "signup"
                  ? "text-blue-500 border-b-4 border-[#7654ff] rounded-full"
                  : "text-gray-200 border-b border-[#E5E6F0] rounded-full"
              } px-4 py-2 focus:outline-none uppercase w-1/2`}
              onClick={() => handleTabChange("signup")}
            >
<<<<<<< HEAD
              Signup 
=======
              Signup
>>>>>>> developnment
            </button>
          </div>
          <div className="content">
            {activeTab === "login" && (
              <form onSubmit={handleLoginSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <div className="coolinput mb-4">
                  <label htmlFor="input" className="text">
                    Game Name
                  </label>
                  <input
                    type="text"
                    placeholder="Super Awesome Game"
                    name="input"
                    className="input"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                </div>
                <div className="coolinput mb-4">
                  <label htmlFor="input" className="text">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="input"
                    className="input"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btnlogin border-0 rounded-[33px] hover:border-0 w-full bg-[#121051] text-white py-2"
                  disabled={toastVisible}
                >
                  Login
                </button>
              </form>
            )}
            {activeTab === "signup" && (
              <form onSubmit={handleSignupSubmit}>
                <h2 className="text-2xl font-semibold mb-4">Signup</h2>
                <div className="coolinput mb-4">
                  <label htmlFor="input" className="text">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="input"
                    className="input"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                  />
                </div>
                <div className="coolinput mb-4">
                  <label htmlFor="input" className="text">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="input"
                    className="input"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btnlogin border-0 rounded-[33px] hover:border-0 w-full bg-[#121051] text-white py-2"
                >
                  Signup
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Login;
