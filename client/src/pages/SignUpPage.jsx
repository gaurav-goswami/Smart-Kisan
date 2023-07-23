import React, { useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import { state } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { useSendOtpMutation } from "../services/AuthApi";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../lib/Auth";
import { Link } from "react-router-dom";
import { setDetails } from "../app/features/UserDetails";

const SignUpPage = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const {loading} = useSelector((state) => state.auth);
  const [sendOtpFn] = useSendOtpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSendOtp = (e) => {
    
    e.preventDefault();
    dispatch(setDetails({firstName : signUpDetails.firstName, lastName : signUpDetails.lastName, email : signUpDetails.email, password : signUpDetails.password, contactNumber : signUpDetails.contactNumber, state : signUpDetails.state, city : signUpDetails.city}));
    dispatch(sendOTP(sendOtpFn, {email : signUpDetails.email}, navigate))

  }

  return (
    <>
      <MainWrapper>
        <div className="min-h-screen w-[90%] md:w-[70%] mx-auto flex justify-center items-center">
          <form className="flex w-[80%] py-8 px-2 flex-col gap-4 md:w-[80%] xl:w-[550px] bg-[#b2f4ce90]" onSubmit={handleSendOtp}>
            <input
              name="firstName"
              type="text"
              placeholder="Enter first name"
              className="py-3 px-2 outline-none w-[100%]"
              value={signUpDetails.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Enter last name"
              className="py-3 px-2 outline-none w-[100%]"
              value={signUpDetails.lastName}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Enter email ID"
              className="py-3 px-2 outline-none w-[100%]"
              value={signUpDetails.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className="py-3 px-2 outline-none w-[100%]"
              value={setSignUpDetails.password}
              onChange={handleChange}
              required
            />

            <select
              name="state"
              className="p-2 w-[100%]"
              value={signUpDetails.state}
              onChange={handleChange}
              required
            >
              <option>Select State</option>
              {state.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <input
              name="city"
              type="text"
              placeholder="Enter city name"
              className="py-3 px-2 outline-none w-[100%]"
              value={signUpDetails.city}
              onChange={handleChange}
              required
            />

            <input
              name="contactNumber"
              type="number"
              placeholder="Enter mobile number"
              className="py-3 px-2 outline-none w-[100%]"
              value={signUpDetails.contactNumber}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="p-3 outline-none w-[100%]  bg-green-400 rounded-md font-semibold"
              disabled={loading}
            >
              SignUp
            </button>

            <span>Already have an Account? <Link to="/auth/login" className="font-semibold">Login</Link></span>
          </form>
        </div>
      </MainWrapper>
    </>
  );
};

export default SignUpPage;
