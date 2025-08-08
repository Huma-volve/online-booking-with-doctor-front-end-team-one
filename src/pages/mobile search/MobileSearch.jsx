import { Link } from "react-router-dom";
import { specialt } from "../../data/data";

// Import icons
import arrowLeftIcon from "../../assets/icons/arrow left.svg";
import magnifierIcon from "../../assets/icons/Magnifer.png";

const MobileSearch = () => {
  return (
    <>
      <div className="flex   gap-2 items-center mt-8 w-[90%] px-8 ">
        <Link to="/home">
          <img loading="lazy" src={arrowLeftIcon} alt="arrow left" />
        </Link>
        <h1 className="font-medium ml-[40%] text-[18px]">Search</h1>
      </div>
      <div className="flex  items-center bg-[#F5F6F7] w-[90%] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-4 mt-8 ml-[5%] ">
        <img  loading="lazy"src={magnifierIcon} alt="search icon" className="w-[20px]" />
        <Link to="/search" className="w-full">
          <input
            className="bg-transparent outline-none text-gray-600 w-full text-[13px]"
            type="text"
            placeholder="Search for specialty, doctor"
          />
        </Link>
      </div>
      <p className="text-[14px] ml-[6%] my-5">
        Search by your location{" "}
        <Link to="/maps" className="text-[#1490E3] text-[12px]">
          129,El-Nasr Street, Cairo
        </Link>
      </p>
      <h1 className=" ml-[5%] text-[18px]">All Specialties</h1>
      <div className="flex flex-wrap gap-4  p-4  ">
        {specialt.map((specialty) => (
          <div
            key={specialty.id}
            className="flex items-center  rounded-[14px] w-fit-content gap-[8px] pt-2  pr-8 pl-4  border-2 "
          >
            <img loading="lazy"
              src={specialty.image}
              alt={specialty.name}
              className="w-[20px] h-[20px] mb-2"
            />
            <h2 className="text-[#404448] text-[13px]  mb-2 w-fit-content">
              {specialty.name}
            </h2>
          </div>
        ))}
      </div>
      <h1 className=" ml-[5%] mb-3 text-[18px]">History </h1>
      <div className="flex flex-wrap gap-3 mb-[5vh] ml-[5%]">
        <h2 className="rounded-[14px] w-fit-content p-2 text-[#404448]  px-2  border-2 ">
          Psychiatrist
        </h2>
        <h2 className="rounded-[14px] w-fit-content p-2 text-[#404448]  px-4  border-2 ">
          Robert Johnson{" "}
        </h2>
        <h2 className="rounded-[14px] w-fit-content p-2 text-[#404448]  px-4  border-2 ">
          Helwan
        </h2>
        <h2 className="rounded-[14px] w-fit-content p-2 text-[#404448]  px-4  border-2 ">
          Heart doctor
        </h2>
      </div>
    </>
  );
};
export default MobileSearch;
