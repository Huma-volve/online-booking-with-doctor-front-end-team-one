import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../../assets/images/profile-image.png";
import cameraIcon from "../../assets/icons/camera-icon.svg";
import locationIcon from "../../assets/icons/location-icon.svg";
import emailIcon from "../../assets/icons/email-icon.svg";
import fullNameIcon from "../../assets/icons/full-name-icon.svg";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";
import BirthdayDropdown from "../../components/profile/BirthdayDropdown";
import TelInput from "../../components/profile/TelInput";
import downArrowIcon from "../../assets/icons/down-arrow-icon.svg";

export default function EditProfile() {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(profileImage); // Current profile image

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Update the displayed profile image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mx-3 my-5">
      <Link to=".." relative="path" className="block mb-4 ml-2">
        <img loading="lazy" src={rightArrowIcon} alt="Right Arrow" className="rotate-180" />
      </Link>
      <form>
        <div className="flex flex-col items-center justify-center relative">
          <img loading="lazy"
            src={previewImage}
            alt="Profile"
            className="w-[113px] h-[113px] rounded-full object-cover border-r-2 border-r-[#145DB8]"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="w-[24px] h-[24px] absolute left-[62%] top-[78px] sm:left-[55%] lg:left-[53%] bg-gradient-to-l from-[#145eb885] to-[#ffffff98]  rounded-full p-[1px] shadow-md hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-center w-full h-full bg-white/75 rounded-full  ">
              <img loading="lazy"
                src={cameraIcon}
                alt="Camera"
                className="w-[16px] h-[13px]  "
              />
            </div>
          </button>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <h1>Seif Mohamed</h1>
          <div className=" flex items-center gap-1 text-xs text-gray-500">
            <img loading="lazy" src={locationIcon} alt="Location" />
            <p>129, El-Nasr Street, Cairo</p>
            <img loading="lazy"
              src={downArrowIcon}
              alt="Down Arrow"
              className="inline-block w-4"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 bg-[#F5F6F7] pr-[24px] pl-[16px] py-2 rounded-md">
          <img loading="lazy" src={emailIcon} alt="email icon" />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-none outline-none"
          />
        </div>
        <div className="flex items-center gap-2 mt-4 bg-[#F5F6F7] pr-[24px] pl-[16px] py-2 rounded-md">
          <img loading="lazy" src={fullNameIcon} alt="full name icon" />
          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent border-none outline-none"
          />
        </div>
        <TelInput />
        <BirthdayDropdown />
        <Link
          to=".."
          relative="path"
          className="block text-center mt-12 bg-[#145DB8] text-white py-2 rounded-lg w-full hover:bg-[#0f4a7c] transition-colors"
        >
          Edit Profile
        </Link>
      </form>
    </div>
  );
}
