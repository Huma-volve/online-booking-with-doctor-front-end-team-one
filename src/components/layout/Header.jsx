import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Import all images
import logoIcon from "../../assets/icons/logo.svg";
import magnifierIcon from "../../assets/icons/Magnifer.png";
import vectorIcon from "../../assets/icons/Vector.png";
import closeListIcon from "../../assets/icons/close-list.svg";
import bellIcon from "../../assets/icons/Bell.png";
import profileImage from "../../assets/images/Ellipse 1538.png";
import homeActiveIcon from "../../assets/icons/home.svg";
import homeInactiveIcon from "../../assets/icons/home-inactive-icon.svg";
import bookingActiveIcon from "../../assets/icons/booking-nav-icon.svg";
import bookingInactiveIcon from "../../assets/icons/booking.svg";
import profileActiveIcon from "../../assets/icons/profile-nav-icon.svg";
import profileInactiveIcon from "../../assets/icons/Profile (1).svg";

const Header = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div className="hidden md:flex justify-evenly items-center p-2   lg:mx-[100px] mt-[52px] ">
        <Link to="/home">
          <img loading="lazy" src={logoIcon} alt="logo" />
        </Link>
        <div className="flex items-center bg-[#F5F6F7] w-[50%] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-4">
          <img loading="lazy" src={magnifierIcon} alt="search icon" />
          <Link to="/doctors" className="w-full">
            <input
              className="bg-transparent outline-none text-gray-600 w-full"
              type="text"
              placeholder="Search about specialty,doctor"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <div className={close ? "flex gap-4" : "hidden"}>
            <Link
              to="/home"
              className="w-[75%] rounded-[10px] py-[6px] px-[16px] bg-[#F5F6F7]"
            >
              Home
            </Link>
            <Link
              to="/myBooking"
              className="w-[75%] rounded-[10px] py-[6px] px-[16px] bg-[#F5F6F7]"
            >
              Booking
            </Link>
          </div>
          {!close ? (
            <img
            loading="lazy"
              className="cursor-pointer"
              src={vectorIcon}
              alt="list icon"
              onClick={() => setClose(!close)}
            />
          ) : (
            <img
            loading="lazy"
              className="cursor-pointer"
              src={closeListIcon}
              alt="list icon"
              onClick={() => setClose(!close)}
            />
          )}
          <Link to="/home/notifications">
            <img
            loading="lazy"
              className="cursor-pointer"
              src={bellIcon}
              alt="notification icon"
            />
          </Link>
          <Link to="/profile">
            <img
            loading="lazy"
              className="ml-2 cursor-pointer"
              src={profileImage}
              alt="profile icon"
            />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-evenly items-center bg-white shadow-lg z-50 md:hidden py-3 text-[12px]">
        {/* Home */}
        <NavLink to="/home" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <img
                src={isActive ? homeActiveIcon : homeInactiveIcon}
                alt="Home icon"
                loading="lazy"
              />
              <span className={isActive ? "text-[#145DB8]" : "text-[#99A2AB]"}>
                Home
              </span>
            </>
          )}
        </NavLink>

        {/* Booking */}
        <NavLink to="/bookApp" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <img
                src={isActive ? bookingActiveIcon : bookingInactiveIcon}
                alt="Booking icon"
                loading="lazy"
              />
              <span className={isActive ? "text-[#145DB8]" : "text-[#99A2AB]"}>
                Booking
              </span>
            </>
          )}
        </NavLink>

        {/* Profile */}
        <NavLink to="/profile" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <img
                src={isActive ? profileActiveIcon : profileInactiveIcon}
                alt="Profile icon"
                loading="lazy"
              />
              <span className={isActive ? "text-[#145DB8]" : "text-[#99A2AB]"}>
                Profile
              </span>
            </>
          )}
        </NavLink>
      </div>
    </>
  );
};
export default Header;
