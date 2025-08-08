import { useState } from "react";
import {generateCalendarDates} from "../../data/GenerateDaysList";
import Arrowlogo from "../../assets/icons/arrow.png";
import leftarrow from "../../assets/icons/arrow-right.png";
import calendarlogo from "../../assets/icons/calendar-02.png";
import DoctorHeader from "../../components/Booking/DoctorHeader";
import PayFooter from "../../components/Booking/PayFooter";

export default function BookAppoinment() {
  const [show, setShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthLabel = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const times = [
    ["8:00 AM", "10:00 AM", "12:00 PM"],
    ["2:00 PM", "4:00 PM", "6:00 PM"],
    ["8:00 PM", "9:00 PM", "10:00 PM"],
  ];

  const dates = generateCalendarDates(year, month);

  const nextMonth = () => {
    const next = new Date(year, month + 1, 1);
    setCurrentDate(next);
  };

  const prevMonth = () => {
    const prev = new Date(year, month - 1, 1);
    setCurrentDate(prev);
  };

  return (
    <div
      className="bg-white h-auto flex flex-col gap-5">
      <DoctorHeader />
      <div className="mt-8 px-4">
        <h2 className="text-lg font-medium">Select a day</h2>
        <div
          className="flex justify-between mt-3 border-gray-300 border-2 py-3 px-2 rounded-lg w-full"
          style={{ borderColor: show && "#145DB8" }}>
          <div className="flex gap-2 items-center">
            <img loading="lazy" src={calendarlogo} alt="calender logo" className="w-4 h-4" />
            <p>Monday,August 4</p>
          </div>
          <button onClick={() => setShow(!show)}>
            <img
            loading="lazy"
              src={Arrowlogo}
              alt="arrow icon"
              style={{ transform: show && "rotateX(180deg)" }}
            />
          </button>
        </div>
      </div>

      {show && (
        <div className="mt-5 p-5 bg-white border rounded-2xl shadow-lg z-10  transition-all duration-500 ml-4 mr-3">
          <div className="flex justify-between items-center mb-4 py-2 px-3">
            <button onClick={prevMonth} className="text-xl">
              <img
              loading="lazy"
                src={leftarrow}
                alt="left Arrow"
                className="rotate-[180deg]"
              />
            </button>
            <div className="text-lg font-semibold">{monthLabel}</div>
            <button onClick={nextMonth} className="text-xl">
              <img loading="lazy" src={leftarrow} alt="right Arrow" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-500 mt-8">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="text-blue-400 font-medium">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mt-5 text-center">
            {dates.map(({ date, currentMonth }, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg cursor-pointer bg-gray-100 text-sm transition-all
                  ${currentMonth ? "text-black" : "text-gray-400"}
                  hover:bg-blue-100 hover:text-black`}>
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="px-4 mt-5">
        <h2 className="text-lg font-medium">Select a time</h2>
        <div className="grid grid-cols-3 gap-10 mt-4">
          {times.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((time, i) => (
                <button
                  key={i}
                  className="mb-2 text-sm bg-gray-100 border-none hover:bg-blue-700 hover:text-gray-100 text-gray-500 py-2 rounded-lg transition-all outline-none">
                  {time}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full self-end">
      <PayFooter title="Continue to pay" nav="/pay" />
      </div>
    </div>
  );
}
