import { useState, useRef, useEffect } from "react";
import downArrowIcon from "../../assets/icons/down-arrow-icon.svg";
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const years = Array.from({ length: 2025 - 1950 + 1 }, (_, i) => 2025 - i);

export default function BirthdayDropdown() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [openDropdown, setOpenDropdown] = useState(null);

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  // Close dropdown when clicking outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dayRef.current &&
        !dayRef.current.contains(event.target) &&
        monthRef.current &&
        !monthRef.current.contains(event.target) &&
        yearRef.current &&
        !yearRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderDropdown = (label, values, selected, setSelected, id, ref) => (
    <div className="relative w-28" ref={ref}>
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        className="w-full bg-[#F5F6F7] px-3 py-2 rounded-md flex justify-between items-center text-sm"
      >
        {selected || label}
        <span className=" text-gray-500">
          <img
          loading="lazy"
            src={downArrowIcon}
            className={
              openDropdown === id ? "w-[20px] rotate-180" : " w-[20px]"
            }
          />
        </span>
      </button>
      {openDropdown === id && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-md max-h-40 overflow-y-auto shadow-md z-10">
          {values.map((value) => (
            <div
              key={value}
              onClick={() => {
                setSelected(value);
                console.log(`Selected ${label}:`, value);
                setOpenDropdown(null);
              }}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-3">
      <p>Select your birthday</p>
      <div className="flex gap-3 mt-4 mx-auto">
        {renderDropdown(
          "Day",
          days,
          selectedDay,
          setSelectedDay,
          "day",
          dayRef
        )}
        {renderDropdown(
          "Month",
          months,
          selectedMonth,
          setSelectedMonth,
          "month",
          monthRef
        )}
        {renderDropdown(
          "Year",
          years,
          selectedYear,
          setSelectedYear,
          "year",
          yearRef
        )}
      </div>
    </div>
  );
}
