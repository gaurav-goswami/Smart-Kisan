import React, { useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../services/AuthApi";
import { loginUser } from "../lib/Auth";

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...loginDetails , [name] : value});
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(login, loginDetails, navigate));
  }

  return (
    <>
      <MainWrapper>
        <div className="min-h-screen w-[90%] md:w-[70%] mx-auto flex justify-center items-center">
          <form className="flex w-[80%] py-8 px-2 flex-col gap-4 md:w-[80%] xl:w-[550px] bg-[#b0f8cf90]" onSubmit={handleLogin}>
            <input
              name="email"
              value={loginDetails.email}
              type="email"
              placeholder="Enter email ID"
              className="py-3 px-2 outline-none w-[100%]"
              onChange={handleChange}
            />
            <input
              name="password"
              value={loginDetails.password}
              type="password"
              placeholder="Enter password"
              className="py-3 px-2 outline-none w-[100%]"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="p-3 outline-none w-[100%]  bg-green-400 rounded-md font-semibold"
            >
              Login
            </button>

            <span>
              Don't have an Account?{" "}
              <Link to="/auth/signup" className="font-semibold">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </MainWrapper>
    </>
  );
};

export default LoginPage;
