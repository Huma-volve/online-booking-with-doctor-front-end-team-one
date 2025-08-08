import { Link } from "react-router-dom";

// Import images
import mapBackground from "../../assets/images/map.svg";
import arrowLeftIcon from "../../assets/icons/arrow left.svg";
import magnifierIcon from "../../assets/icons/Magnifer.png";
import locationIcon from "../../assets/icons/mage_location.svg";

const MobileMap = () => {
  return (
    <div
      className="w-[100%] h-[100dvh] relative"
      style={{
        backgroundImage: `url(${mapBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-evenly items-center bg-white w-[90%] ml-[5%]  h-[100px] gap-[16px] rounded-[24px] absolute top-[40px]">
        <Link to="/">
          <img loading="lazy" src={arrowLeftIcon} alt="arrow left" />
        </Link>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[15px]">Current location</h1>
          <p className="text-[#145DB8] text-[12px]">
            129,El-Nasr Street, Cairo
          </p>
        </div>
        <Link to="/map-search">
          <img loading="lazy"
            src={magnifierIcon}
            alt="search "
            className="w-[20px] h-[20px]"
          />
        </Link>
      </div>
      <img loading="lazy"
        src={locationIcon}
        alt="location"
        className="absolute right-[20px] top-[80vh]"
      />
      <Link to="/loading-location">
        <button className="bg-[#145DB8] text-white w-[90%] ml-[5%] p-2 rounded-[10px] absolute bottom-[2dvh]">
          Confirm location
        </button>
      </Link>
    </div>
  );
};
export default MobileMap;
