import React, { useRef } from "react";

//Router
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPassword = newPasswordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const emailString = localStorage.getItem("email");
    const email = emailString ? JSON.parse(emailString) : null;

    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword, confirmPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
      return;
    }

    localStorage.removeItem("email");

    navigate("/signin");
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
          Reset Password
        </h2>
        <p className="mb-6 text-gray-600 text-center">
          Lost your password? Please enter your email address. You will receive
          a link to create a new password via email.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            ref={newPasswordRef}
            type="password"
            placeholder="New password*"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm password*"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 focus:outline-none mb-4">
            Reset password
          </button>
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

export default ResetPassword;
