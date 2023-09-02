// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import imageone from "./assets/images/bg.svg";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const validUsername = "patelsankit16@gmail.com";
//     const validPassword = "9574540106";

//     if (username === validUsername && password === validPassword) {
//       console.log("User authenticated");
//       // localStorage.setItem('isAuthorized', true);
//       navigate("/protected");
//     } else {
//       // localStorage.clear();
//       alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex p-5 sm:p-10">
//      <div className="hidden lg:block">
//             <img className="w-full h-full" src={imageone} alt={"logo"}/> 
//     </div>
//      <div className="flex items-center justify-center w-full">
//       <div className="bg-white p-8 shadow-md rounded-md w-96 ">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block">Username</label>
//             <input
//               type="text"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btnlogin border-0 hover:border-0 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
   
//     </div>
//   );
// };

// export default Login;



// latest tab code

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageone from "./assets/images/bg.svg";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Hardcoded username and password for demonstration
    const validUsername = "patelsankit16@gmail.com";
    const validPassword = "9574540106";

    if (loginUsername === validUsername && loginPassword === validPassword) {
      // User is authenticated
      // Redirect to the protected page or load its content dynamically
      console.log("User authenticated");
      // Redirect the user to the protected page
      navigate("/protected");
    } else {
      // Clear form inputs
      setLoginUsername("");
      setLoginPassword("");
      alert("Invalid username or password");
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
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex p-5 sm:p-10">
      <div className="hidden lg:block">
        <img className="w-full h-full" src={imageone} alt={"logo"} />
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <div className="flex justify-between mb-4">
            <button
              className={`${
                activeTab === "login" ? "bg-blue-500" : "bg-gray-200"
              } px-4 py-2 rounded-tl-md rounded-bl-md focus:outline-none`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
            <button
              className={`${
                activeTab === "signup" ? "bg-blue-500" : "bg-gray-200"
              } px-4 py-2 rounded-tr-md rounded-br-md focus:outline-none`}
              onClick={() => handleTabChange("signup")}
            >
              Signup sankit
            </button>
          </div>
          {activeTab === "login" && (
            <form onSubmit={handleLoginSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Login</h2>
             <div class="coolinput">
              <label for="input" class="text">Game Name</label>
              <input type="text" placeholder="Super Awesome Game" name="input" class="input" />
            </div>
             
             
             
              <div className="mb-4">
                <label className="block">Username</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </div>


              <div className="mb-4">
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btnlogin border-0 hover:border-0 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          )}
          {activeTab === "signup" && (
            <form onSubmit={handleSignupSubmit}>
              <h2 className="text-2xl font-semibold mb-4">Signup</h2>
              <div className="mb-4">
                <label className="block">Username</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Username"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btnlogin border-0 hover:border-0 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Signup
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
