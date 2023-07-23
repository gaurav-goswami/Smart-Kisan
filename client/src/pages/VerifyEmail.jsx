import React, { useEffect, useState } from "react";
import MainWrapper from "../Wrapper/MainWrapper";
import OtpInput from "react-otp-input";
import {BsArrowRepeat} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSendOtpMutation, useSignUpMutation } from "../services/AuthApi";
import { sendOTP, signUp } from "../lib/Auth";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const {details} = useSelector((state) => state.userDetails);
  console.log("user details are" , details);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signUpFn] = useSignUpMutation();
  const [resendOtp] = useSendOtpMutation();

  const handleSignUpUser = (e) => {
    e.preventDefault();
    dispatch(signUp(signUpFn, {...details , otp}, navigate));
  }

  const handleResendOtp = () => {
    dispatch(sendOTP(resendOtp , {email : details.email} , navigate));
  }

  useEffect(() => {
    if(details === null) navigate("/auth/signup")
  } , [])

  return (
    <>
      <MainWrapper>
        <div className="grid place-items-center my-8 h-screen">
          <div className="w-max h-max justify-center items-center m-auto flex flex-col gap-8">
            <p className="text-lg font-bold text-green-500 md:text-3xl">
              Enter OTP received on your email ID
            </p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={
                <span className="text-white w-[20px] text-center">&#9135;</span>
              }
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    color: "#000",
                    width: "40px",
                    textAlign: "center",
                    height: "40px",
                    outline: "none",
                  }}
                  className="max-[360px]:w-[20px] max-[360px]:h-[20px]"
                  placeholder="-"
                />
              )}
            />
            <form className="flex gap-4 items-center" onSubmit={handleSignUpUser}>
              <button
                className="p-2 rounded-md outline-none font-semibold flex gap-2 items-center text-center bg-yellow-400"
                type="submit"
              >
                Verify OTP
              </button>

              <span
                className="flex gap-1 items-center text-pure-greys-200 cursor-pointer font-semibold"
                onClick={handleResendOtp}
              >
                <BsArrowRepeat className="text-xl" />
                Resend Otp
              </span>
            </form>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default VerifyEmail;
