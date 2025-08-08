import { Link } from "react-router-dom";

// Import images
import magnifierIcon from "../../assets/icons/Magnifer.png";
import locationIcon from "../../assets/icons/mage_location.svg";

const MapSearch = () => {
  return (
    <div className="relative h-[95dvh]">
      <div className="flex  items-center w-[90%] h-[40px] rounded-[10px] text-[13px] px-[16px] py-[8px] gap-4 mt-8 ml-[5%]">
        <img loading="lazy" src={magnifierIcon} alt="search icon" className="w-[20px]" />
        {/* <Link to="/search" className="w-full"> */}
        <input
          className="bg-transparent outline-none text-gray-600 w-full"
          type="text"
          placeholder="Search for specialty, doctor"
        />
        {/* </Link> */}
      </div>
      <img loading="lazy"
        src={locationIcon}
        alt="location"
        className="absolute right-[20px] top-[75vh]"
      />
      <Link to="/loading-location">
        <button className="bg-[#145DB8] text-white w-[90%] ml-[5%] p-2 rounded-[10px] absolute bottom-4">
          Confirm location
        </button>
      </Link>
    </div>
  );
};
export default MapSearch;
