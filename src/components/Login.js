import { useState } from "react";
import Header from "./Header";

const Login = () => {

  const[isSignInForm,setisSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm);

  }
  return (
    <div className="h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-cover bg-center relative">
     
      <Header/>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login content centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        

        {/* Login form */}
        <form className="bg-black bg-opacity-70 p-6 w-80 flex flex-col gap-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          { !isSignInForm && <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border border-gray-300 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />}
          <input 
            type="text" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-300 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-300 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button 
            type="submit" 
            className="w-full p-3 mb-8 mt-4 bg-red-600 rounded text-white font-semibold hover:bg-red-700 transition"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className=" cursor-pointer"> {isSignInForm ? "Are you new to Netflix? Sign Up Now" : "All Ready Registered ? Plz Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

