import { Link } from "react-router-dom";
import Specialties from "../doctor/Specialties";
import MobileDoctorList from "../mobile home/MobileDoctorList";

// Import icons
import arrowLeftIcon from "../../assets/icons/arrow left.svg";
import magnifierIcon from "../../assets/icons/Magnifer.png";

const AllDoctors = () => {
  return (
    <>
      <div className="flex   gap-2 items-center mt-8 w-[90%] px-8 ">
        <Link to="/home">
          <img loading="lazy" src={arrowLeftIcon} alt="arrow left" />
        </Link>
        <h1 className="font-medium ml-[40%] text-[18px]">Doctors</h1>
      </div>
      <div className="flex  items-center bg-[#F5F6F7] w-[90%] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-4 mt-8 ml-[5%] ">
        <img loading="lazy" src={magnifierIcon} alt="search icon" className="w-[20px]" />
        <Link to="/search" className="w-full">
          <input
            className="bg-transparent outline-none text-gray-600 w-full text-[13px]"
            type="text"
            placeholder="Search for specialty, doctor"
          />
        </Link>
      </div>

      <div className="w-[90%] m-[5%] ">
        <Specialties />
      </div>

      <MobileDoctorList />
    </>
  );
};
export default AllDoctors;
