import { Link } from "react-router-dom";
import AvailableData from "./AvailableData";
import DoctorList from "./DoctorList";
import Specialties from "./Specialties";
import MobileHome from "../mobile home/MobileHome";
import filter from "../../assets/icons/Tuning 2.svg";

// Import additional icons
import arrowIcon from "../../assets/icons/arrow.svg";
import routingIcon from "../../assets/icons/Routing 2.svg";

const Doctors = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="hidden lg:flex justify-evenly items-center px-16 pt-12">
          <div className="flex justify-between items-center px-4 w-[150px]  border-2 border-[#BBC1C7] rounded-[10px] ">
            <img loading="lazy" src={filter} alt="filter" />
            <p className="text-[#6D7379] pr-4">Filter</p>
            <img loading="lazy"
              src={arrowIcon}
              alt="arrow"
              className="border-l-2  border-[#BBC1C7] pl-4 py-4 border-"
            />
          </div>

          <input
            className="bg-transparent border-2 border-[#BBC1C7] outline-none text-gray-600 rounded-[10px] px-4 py-3 w-[50%] lg:w-[70%] "
            type="text"
            placeholder="Search doctor"
          />
          <Link
            to="/map"
            className="flex justify-between items-center p-3 w-[100px]  border-2 border-[#BBC1C7] rounded-[10px] "
          >
            <img loading="lazy" src={routingIcon} alt="filter" />
            <p className="text-[#6D7379] ">Map</p>
          </Link>
        </div>
        <div className="flex justify-evenly  p-2 lg:p-8 pt-12">
          <AvailableData />
          <div className="w-[100%] lg:w-[75%]">
            <h1 className="mb-8 text-[30px]">Choose Specialties</h1>

            <Specialties />
            <DoctorList />
          </div>
        </div>
        <div className="flex justify-center items-center p-8 lg:ml-40 mb-8">
          <button className="lg:w-[250px] text-[#145DB8] text-[14px]  w-fit-content  px-[16px] py-[10px] rounded-[10px] border border-[#145DB8]">
            Next Page
          </button>
        </div>
      </div>
      <MobileHome />
    </>
  );
};
export default Doctors;
