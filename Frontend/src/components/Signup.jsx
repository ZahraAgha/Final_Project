import React from "react";

//Router
import {Link, useNavigate} from "react-router-dom";

//React hooks
import {useRef} from "react";

//Redux Types
import {AppDispatch} from "../store/store.js";

//Redux hooks
import {useDispatch} from "react-redux";
import {setUser} from "../slices/user.slice.js";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullNameRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const fullName = fullNameRef.current?.value;
    const password = passwordRef.current?.value;

    // console.log(email, fullName, password);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, fullName, password}),
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

      if (fullNameRef.current) {
        fullNameRef.current.value = "";
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <h1 className="font-medium text-2xl py-4">Create Account</h1>
        <span> Continue with Google</span>

        {/* submit form  */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            ref={fullNameRef}
            placeholder="FullName"
            className="bg-gray-200 mt-2 py-3 px-6 rounded w-[440px] "
            type="text"
          />

          {/* <input
            placeholder="Last Name"
            className="bg-gray-200 mt-2 py-3 px-6 rounded w-[440px] "
            type="text"
          /> */}

          <input
            ref={emailRef}
            placeholder="Your email*"
            className="bg-gray-200 mt-2 py-3 px-6 rounded w-[440px] "
            type="email"
          />
          <input
            ref={passwordRef}
            placeholder="Password*"
            className="bg-gray-200 mt-2 py-3 px-6 rounded w-[440px] "
            type="password"
          />

          <p className="w-[440px] text-sm text-[#555555]  mt-2 py-3 ">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account and for
            other purposes described in our privacy policy.
          </p>
          <Link to="/signin">
            <button className="text-white mt-2 py-3 px-6 rounded w-[440px] text-center bg-[#222222] mb-2">
              Login
            </button>
          </Link>

          <button className="text-white mt-2 py-3 px-6 rounded w-[440px] text-center bg-[#222222]">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
