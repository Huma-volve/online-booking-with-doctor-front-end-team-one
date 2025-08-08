/* eslint-disable react/prop-types */
import { useState } from "react";
import closeEyeIcon from "../../assets/icons/close-eye-icon.svg";
import openEyeIcon from "../../assets/icons/open-eye-icon.svg";

export default function PasswordInput({ title, defaultValue = "password" }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
      <div className="flex items-center gap-2 bg-[#F5F6F7] pr-[16px] pl-[24px] py-2 rounded-md">
        <input
          type={isPasswordVisible ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-transparent border-none outline-none flex-1"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="p-1"
        >
          <img
          loading="lazy"
            src={isPasswordVisible ? openEyeIcon : closeEyeIcon}
            alt={isPasswordVisible ? "Hide password" : "Show password"}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}
