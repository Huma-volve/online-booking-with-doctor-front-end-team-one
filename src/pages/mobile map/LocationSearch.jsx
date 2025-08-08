import { Link } from "react-router-dom";
import MobileDoctorList from "../mobile home/MobileDoctorList";

// Import images
import arrowLeftIcon from "../../assets/icons/arrow left.svg";
import profileImage from "../../assets/images/Ellipse 1538.png";
import magnifierIcon from "../../assets/icons/Magnifer.png";
import sortIcon from "../../assets/icons/Sort Vertical.svg";
import tuningIcon from "../../assets/icons/Tuning 2.svg";
import routingIcon from "../../assets/icons/Routing 2.svg";

const LocationSearch = () => {
  return (
    <>
      <div className="flex justify-around items-center mt-8 gap-2 ">
        <Link
          to="/home"
          className="relative  w-[40px] h-[40px] text-center rounded-[22px] shadow-lg"
        >
          <img loading="lazy"
            src={arrowLeftIcon}
            alt="arrow left"
            className="absolute top-3 left-[15px]"
          />
        </Link>
        <div className="flex flex-col justify-center items-start ml-[-35px]">
          <h1 className="text-[#145DB8]">Your location</h1>
          <p className="text-[#6D7379] text-[12px]">
            129,El-Nasr Street, Cairo
          </p>
        </div>
        <img loading="lazy" src={profileImage} alt="profile" />
      </div>
      <div className="flex  items-center bg-[#F5F6F7] w-[90%] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-4 my-6 ml-[5%] ">
        <img loading="lazy" src={magnifierIcon} alt="search icon" className="w-[20px]" />
        <Link to="/search" className="w-full">
          <input
            className="bg-transparent outline-none text-gray-600 w-full text-[13px]"
            type="text"
            placeholder="Search for specialty, doctor"
          />
        </Link>
      </div>
      <div className="flex justify-evenly gap-4 items-center  px-4 mb-4">
        <Link
          to="/current-location"
          className="flex justify-evenly items-center p-2 w-[200px]  border-2 border-[#BBC1C7] rounded-[10px] "
        >
          <img loading="lazy" src={sortIcon} alt="sort" />
          <p className="text-[#6D7379] text-[13px]">sort</p>
        </Link>
        <Link
          to="/current-location"
          className="flex justify-evenly items-center p-2 w-[200px]  border-2 border-[#BBC1C7] rounded-[10px] "
        >
          <img loading="lazy" src={tuningIcon} alt="filter" />
          <p className="text-[#6D7379] text-[13px]">Filter</p>
        </Link>
        <Link
          to="/current-location"
          className="flex justify-evenly items-center p-2  w-[200px]  border-2 border-[#BBC1C7] rounded-[10px] "
        >
          <img loading="lazy" src={routingIcon} alt="map" />
          <p className="text-[#6D7379] text-[13px]">Map</p>
        </Link>
      </div>
      <h1 className="text-[#1283CF] font-medium ml-[5%] mb-4">24 Reasults</h1>
      <MobileDoctorList />
    </>
  );
};
export default LocationSearch;
