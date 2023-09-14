import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imageone from "./assets/images/bg.svg";
import bglogin from "./assets/images/bg-login.svg";

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
      toast.success("login successful", {
        autoClose: 3000,
      });
      navigate("/protected");
    } else {
      // setLoginUsername("");
      // setLoginPassword("");
      toast.error("Invalid username or password", {
        autoClose: 3000,
      });
    }
  };

  // const handleSignupSubmit = (e) => {
  //   e.preventDefault();
  //   toast.success("signup successful", {
  //     autoClose: 3000,
  //   });
  // };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Simulate signup logic here

    // Disable the button
    setToastVisible(true);

    // Simulate a delay of 3 seconds
    setTimeout(() => {
      // Enable the button after 3 seconds
      setToastVisible(false);
    }, 3500);

    toast.success("Signup successful", {
      autoClose: 3000,
    });
  };

  return (
    <div className="min-h-screen flex p-5 sm:p-10">
      <div className="hidden lg:block lg:w-3/4 xl:w-1/2 2xl:w-2/5 relative">
        <img className="h-full" src={imageone} alt={"logo"} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img className="" src={bglogin} alt={"logo"} />
          <span className="text-40 2xl:text-[56px] font-300 text-white tracking-[2.8px]">
            Welcome to
          </span>
          <p className="text-48 2xl:text-64 font-700 font-poppins text-white tracking-[5.12px]">
            Dcentral.me
          </p>
          <div>
            <p className="text-white/50 ps-12">
              Id etiam pulvinar amet ac elit, amet duis tellus morbi. Molestie
              egestas condimentum morbi pellentesque et viverra erat mauris.
              Dolor ac, lacus accumsan tellus laoreet arcu.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="bg-white p-8 shadow-md rounded-md w-96 md:w-[450px]">
          <div className="flex justify-between mb-4">
            <button
              className={`${
                activeTab === "login"
                  ? "text-blue-500 border-b-4 border-[#7654ff]"
                  : "text-gray-200 border-b border-[#E5E6F0]"
              } px-4 py-2 focus:outline-none uppercase w-1/2`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
            <button
              className={`${
                activeTab === "signup"
                  ? "text-blue-500 border-b-4 border-[#7654ff]"
                  : "text-gray-200 border-b border-[#E5E6F0]"
              } px-4 py-2 focus:outline-none uppercase w-1/2`}
              onClick={() => handleTabChange("signup")}
              disabled={toastVisible}
            >
              Signup
            </button>
          </div>
          <div className="content">
            {activeTab === "login" && (
              <form onSubmit={handleLoginSubmit}>
                <h2 className="text-24 font-600 mb-4">Login</h2>
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
                >
                  Login
                </button>
              </form>
            )}
            {activeTab === "signup" && (
              <form onSubmit={handleSignupSubmit}>
                <h2 className="text-24 font-600 mb-4">Signup</h2>
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
                  disabled={toastVisible}
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

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import imageone from "./assets/images/bg.svg";
// import bglogin from "./assets/images/bg-login.svg";

// const Login = () => {
//   const [activeTab, setActiveTab] = useState("login");
//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [signupUsername, setSignupUsername] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");
//   const navigate = useNavigate();
//   const [toastVisible, setToastVisible] = useState(false);

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();

//     const validUsername = "patelsankit16@gmail.com";
//     const validPassword = "9574540106";

//     if (loginUsername === validUsername && loginPassword === validPassword) {
//       toast.success("Login successful", {
//         autoClose: 3000,
//       });
//       navigate("/protected");
//     } else {
//       toast.error("Invalid username or password", {
//         autoClose: 3000,
//       });
//     }
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     // Simulate signup logic here

//     // Disable the button
//     setToastVisible(true);

//     // Simulate a delay of 3 seconds
//     setTimeout(() => {
//       // Enable the button after 3 seconds
//       setToastVisible(false);
//     }, 3000);

//     toast.success("Signup successful", {
//       autoClose: 3000,
//     });
//   };

//   return (
//     <div className="min-h-screen flex p-5 sm:p-10">
//       {/* ... (your existing code) */}
//       <div className="content">
//         {activeTab === "login" && (
//           <form onSubmit={handleLoginSubmit}>
//             {/* ... (your existing code) */}
//           </form>
//         )}
//         {activeTab === "signup" && (
//           <form onSubmit={handleSignupSubmit}>
//             {/* ... (your existing code) */}
//             <button
//               type="submit"
//               className="btnlogin border-0 rounded-[33px] hover:border-0 w-full bg-[#121051] text-white py-2"
//               disabled={toastVisible}
//             >
//               Signup
//             </button>
//           </form>
//         )}
//       </div>
//       <ToastContainer position="bottom-right" />
//     </div>
//   );
// };

// export default Login;
