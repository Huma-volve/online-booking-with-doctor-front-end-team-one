import { specialt } from "../../data/data";

const Specialties = () => {
 
  return (
    <div className="lg:ml-8">
    <div className="lg:w-full overflow-x-auto">
      <div className="flex items-center lg:w-full gap-4">
        {/* <h1 className=" rounded-[14px] w-fit-content gap-[8px]  py-[8px] px-[16px]  border-2 ">All</h1> */}
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
    </div>
    </div>
  );
};
export default Specialties;
