import React from "react";
import {useRef} from "react";
//Router
import {Link, useNavigate} from "react-router-dom";

//Redux
import {setUser} from "../slices/user.slice.js";
import {useDispatch} from "react-redux";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);

        return;
      }

      console.log(data);

      dispatch(setUser(data));

      if (emailRef.current) {
        emailRef.current.value = "";
      }

      if (passwordRef.current) {
        passwordRef.current.value = "";
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 my-10 w-full h-full bg-white ">
      <h1 className="text-3xl font-medium">Login</h1>
      <span> Continue with Google</span>
      <div className="flex space-x-3 my-5">
        <a href="#" className="icon">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      {/* Submit Form */}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <input
          ref={emailRef}
          type="email"
          placeholder="Your email*"
          className="bg-gray-200 mt-2 py-3 px-6 rounded w-[440px] "
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password*"
          className="bg-gray-200 mt-2 py-3 px-6 rounded w-[440px]"
        />

        <Link to="/forget" className="text-sm text-gray-500 mt-2 py-3">
          Forget Your Password?
        </Link>
        <button className="text-white mt-2 py-3 px-6 rounded w-[440px] text-center bg-[#222222] mb-2">
          Login
        </button>
      </form>

      {/* Submit Form */}
      <Link
        to="/signup"
        className="text-white mt-2 py-3 px-6 rounded w-[440px] text-center bg-[#222222]"
      >
        Create Account
      </Link>
    </div>
  );
};

export default SignIn;
