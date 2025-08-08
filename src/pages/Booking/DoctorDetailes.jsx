import profileIcon from "../../assets/icons/profileCard.svg";
import meesageIcon from "../../assets/icons/messages.svg";
import medalIcon from "../../assets/icons/medal.svg";
import starIcon from "../../assets/icons/star.png";
import yellowstarIcon from "../../assets/icons/yellowstar.png";
import stars from "../../assets/icons/stars.png";
import penIcon from "../../assets/icons/pen.png";
import patient from "../../assets/images/nabila.png";
import { useState } from "react";
import DoctorHeader from "../../components/Booking/DoctorHeader";
import PayFooter from "../../components/Booking/PayFooter";
import { Link } from "react-router-dom";

export default function DoctorDetailes() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white min-h-screen">
      {/* header */}
      <DoctorHeader />
      {/* body */}
      {/* icon */}
      <div className="w-full flex justify-around mt-2 p-4">
        <div className="flex flex-col items-center">
          <img loading="lazy" src={profileIcon} alt="profile Icon" className="w-7 h-9" />
          <h4 className="mt-3 text-gray-900 font-medium text-sm">2,000+</h4>
          <p className="text-sm text-gray-500">patients</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src={medalIcon} alt="Medal Icon" className="w-7 h-9" />
          <h4 className="mt-3 text-gray-900 font-medium text-sm">10+</h4>
          <p className="text-sm text-gray-500">experience</p>
        </div>
        <div className="flex flex-col items-center">
          <img
          loading="lazy"
            src={starIcon}
            alt="Star Icon"
            className="w-6 h-6 mt-[8px] mb-1"
          />
          <h4 className="mt-3 text-gray-900 font-medium text-sm">4.5</h4>
          <p className="text-sm text-gray-500">rating</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src={meesageIcon} alt="Messages Icon" className="w-7 h-9" />
          <h4 className="mt-3 text-gray-900 font-medium text-sm">1,872</h4>
          <p className="text-sm text-gray-500">reviews</p>
        </div>
      </div>
      {/* About  */}
      <div className="mt-4 ml-4">
        <h2 className="mb-1 text-xl font-medium p-2 ">About Me</h2>
        <p className="text-gray-500 mr-2 text-sm leading-6 ml-2 transition-all duration-150">
          Dr. Jessica Turner, a board-certified Pulmonologist with over 8 years
          of experience in diagnosing and treating a wide range of respiratory
          and
          {!expanded && ""}
          {expanded && (
            <>
              lung-related conditions. I specialize in asthma, COPD, chronic
              cough, and sleep-related breathing disorders.
            </>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 ml-1 focus:outline-none">
            {expanded ? "Read less" : "Read more"}
          </button>
        </p>
      </div>
      {/* Reviews */}
      <div className="ml-4 mt-2 p-2 mr-4 mb-4">
        <div className="flex justify-between">
            <h3 className="font-medium text-[18px]">Reviews and Rating</h3>
            <div className="flex items-center mr-2 gap-1">
                <img loading="lazy" src={penIcon} alt="EDit Icon" className="w-4 h-4" />
                <Link to="/add-review">
                <button className="text-sm text-blue-700">add review</button>
                </Link>
            </div>
        </div>
        <div className="flex justify-between mt-5 items-center">
            <h2 className="text-4xl font-medium">4.5/5</h2>
            <div className="flex flex-col items-center gap-1">
                <img loading="lazy" src={stars} alt="Rating" />
                <p className="text-gray-400 font-medium">1250+ Reviews</p>
            </div>
        </div>
      </div>
      {/* reviewCard */}
      <div className="flex flex-col p-4 ml-4 mt-4 mr-4 border rounded-lg shadow border-gray-300">
        <div className="flex justify-between items-start">
            <div className="flex gap-2 items-center">
                <img loading="lazy" src={patient} alt="patient Review" className="rounded-full bg-[#D7D7E4] w-16 h-14"/>
                <div className="flex flex-col ml-1">
                    <h3 className="font-medium">Nabila Reyna</h3>
                    <p className="text-gray-500 text-sm">30 min ago</p>
                </div>
            </div>
            <div className="flex items-center gap-1 p-2 bg-[#F9E0001A] rounded-lg mt-2">
            <img loading="lazy" src={yellowstarIcon} alt="icon" className="h-4 w-4"/>
            <p className="text-yellow-500 font-medium">4.5</p>
            </div>
        </div>
        <p className="mt-3 text-gray-500 text-sm">Excellent service! Dr.Jessica Turner was attentive and through. The clinic was clean, and the staff were friendlly. Highly recommend for in-person care!</p>
      </div>
      {/* footer */}
      <PayFooter title="Book Appoinment" nav="/bookApp"/>
    </div>
  );
}
