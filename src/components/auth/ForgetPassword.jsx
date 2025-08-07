import React, { useRef } from "react";
import { Link } from "react-router";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import EmailIcon from "../../assets/icons/EmailIcon.png";
function ForgetPassword() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-start pt-40 md:justify-center">
      <div className="">
        <div className="flex items-center justify-center gap-24 text-lg font-[400] mb-4 d-block md:hidden absolute top-6 left-4">
          <Link to="/auth/login">
            <img className="" src={ArrowLeft} alt="Back" />
          </Link>
          <p>Forget your password</p>
        </div>
        <p className="text-start mb-5 font-[400]  text-[#404448]">
          Please enter your email to reset the password
        </p>
        <form className="flex flex-col mb-14 ">
          {/* EMAIL */}
          <div className="relative">
            <img
              src={EmailIcon}
              alt="email icon"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-4 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
        </form>
        <Link
          to="/auth/CodeVerification"
          className="bg-[#145DB8] text-white rounded-md py-3 px-36 m-auto my-5 text-base font-[400] flex items-center justify-center gap-2"
        >
          {" "}
          Reset Password
        </Link>
      </div>
    </div>
  );
}

export default ForgetPassword;
