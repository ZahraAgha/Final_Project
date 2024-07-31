import React from "react";
import { useRef } from "react";

//Router
import { Link, useNavigate } from "react-router-dom";

const ForgetPass = () => {
  const emailRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault()
    const email = emailRef.current?.value;

    if (!email) {
      return;
    }

    try {
      
      fetch('/api/auth/forget-password',{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({email}),
      })
    } catch (error) {
      console.log(error);
    }

   

    localStorage.setItem("email", JSON.stringify(email));

   
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-end">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Forgot Password
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
        </p>
        <form onSubmit={handleSubmit}>
          <input ref={emailRef}
            type="email"
            placeholder="Your email*"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <Link to="/reset">
            <button className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 focus:outline-none mb-4">
              Reset password
            </button>
          </Link>
        </form>
        <Link to="/signin">
          <button className="w-full bg-white border border-black text-black p-3 rounded hover:bg-gray-100 focus:outline-none">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ForgetPass;
