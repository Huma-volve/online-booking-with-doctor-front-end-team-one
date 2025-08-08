// Import icon
import arrowBottomIcon from "../../assets/icons/arrow bottom.svg";

const AvailableData = () => {
  return (
    <div className="ml-8 hidden lg:flex flex-col">
      <h1 className="text-[#05162C] text-[14px]">Available Data</h1>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="today"
          name="today"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="today" className="text-[#6D7379] text-[14px]">
          Today
        </label>
      </div>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="Tomorrow"
          name="Tomorrow"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="Tomorrow" className="text-[#6D7379] text-[14px]">
          Tomorrow
        </label>
      </div>
      <h1 className="text-[#05162C] text-[14px]">Gender</h1>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <button className="bg-[#145DB8] text-[14px]  w-fit-content  text-white px-[16px] py-[10px] rounded-[10px]">
          Male
        </button>
        <button className="text-[#145DB8] text-[14px]  w-fit-content  px-[16px] py-[10px] rounded-[10px] border border-[#145DB8]">
          Female
        </button>
      </div>
      <h1 className="text-[#05162C] text-[14px]">Consultation Type</h1>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="clinic"
          name="clinic"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="clinic" className="text-[#6D7379] text-[14px]">
          In-clinic
        </label>
      </div>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="home"
          name="home"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="home" className="text-[#6D7379] text-[14px]">
          Home Visit
        </label>
      </div>
      <div className="flex items-center justify-between gap-[8px] my-4 w-fit-content w-[150px]">
        <h1 className="text-[#05162C] text-[14px]">Sort </h1>
        <img loading="lazy" src={arrowBottomIcon} alt="sort" className="w-[16px]  my-4" />
      </div>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="recomended"
          name="recomended"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="recomended" className="text-[#6D7379] text-[14px]">
          Most recommended
        </label>
      </div>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="lowPrice"
          name="lowPrice"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="lowPrice" className="text-[#6D7379] text-[14px]">
          Price Low to high{" "}
        </label>
      </div>
      <div className="flex items-center gap-[8px] my-4 w-fit-content">
        <input
          type="checkbox"
          id="highPrice"
          name="highPrice"
          className="w-[20px] h-[20px] "
        />
        <label htmlFor="highPrice" className="text-[#6D7379] text-[14px]">
          Price High to low
        </label>
      </div>
    </div>
  );
};
export default AvailableData;
