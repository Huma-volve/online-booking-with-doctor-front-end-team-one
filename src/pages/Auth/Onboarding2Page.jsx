import React, { useState } from "react";
import { Link } from "react-router";
import Onboarding2 from "../../assets/images/Onboarding2.png";

function Onboarding2Page() {
  return (
    <div className="relative flex flex-col items-center justify-around h-screen">
      <div>
        <Link
          to="/register"
          className="text-gray-500 text-lg absolute top-4 right-4"
        >
          Skip
        </Link>
        <img src={Onboarding2} alt="Onboarding1" />
      </div>
      <div>
        <div>
          <h3 className="text-center text-2xl">Find Doctors Around You</h3>
          <p className="text-center text-gray-500 mt-4 px-14">
            Quickly discover trusted doctors near your area. Whether you need a
            general checkup or a specialist, we connect you with nearby clinics
            for fast and convenient care.
          </p>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                1 === index
                  ? "w-6 bg-[#145DB8]"
                  : "w-2 bg-gray-300 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
      <Link
        className="bg-[#145DB8] text-white text-lg text-center py-3 px-[150px] rounded"
        to="/SignInWithSocial"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Onboarding2Page;
