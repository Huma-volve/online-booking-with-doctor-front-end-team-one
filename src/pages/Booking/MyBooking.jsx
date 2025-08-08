import { generateDatesToEndOfYear } from "../../data/Date";
import { generateCalendarDates } from "../../data/GenerateDaysList";
import Arrowlogo from "../../assets/icons/arrow.png";
import calendarlogo from "../../assets/icons/calendar-02.png";
import leftarrow from "../../assets/icons/arrow-right.png";
import { useRef, useState } from "react";
import BookCard from "../../components/Booking/BookCard";
import PopMessage from "../../components/PopMessages/PopMessage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/layout/Header";

export default function MyBooking() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const days = generateDatesToEndOfYear();

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleClick = (date) => {
    setSelectedDate(date);
  };
  // for labtobs
  const [show, setShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthLabel = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

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
    <div className="h-auto bg-white">
      <Header />
      <h2 className="ml-3 mt-3 font-medium text-lg md:hidden">My Booking</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 py-2 px-2 bg-white rounded-lg scrollbar-hide select-none cursor-grab md:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        {days.map((day) => (
          <button
            key={day.date}
            onClick={() => handleClick(day.date)}
            className={`min-w-[60px] px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap mt-3`}
            style={{
              backgroundColor:
                selectedDate === day.date
                  ? "#145DB8"
                  : "rgba(245, 246, 247, 1)",
              color: selectedDate === day.date ? "white" : "#6D7379",
            }}>
            <div>{day.label}</div>
            <div className="text-xs">{day.date.slice(8)}</div>
          </button>
        ))}
      </div>
      <div className="md:flex justify-between items-center mt-12 ml-4 mr-4 hidden">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-700">Your Apponimnets</h2>
          <div className="flex w-full items-center -ml-2">
            <button className="text-gray-100 px-4 py-1 rounded-lg bg-blue-600">All</button>
            <button className="text-gray-500 p-4 rounded-lg">Upcoming</button>
            <button className="text-gray-500 p-4 rounded-lg">Completed</button>
            <button className="text-gray-500 p-4 rounded-lg">Canceld</button>
          </div>
        </div>
        <div>
          {/* calendar */}
          <div
            className="hidden md:flex justify-between relative border-gray-300 border-2 py-4 rounded-lg w-[350px]"
            style={{ borderColor: show && "#145DB8" }}>
            <div className="flex gap-2 items-center ml-4">
              <img loading="lazy" src={calendarlogo} alt="calender logo" className="w-4 h-4" />
              <p>Monday,August 4</p>
            </div>
            <button onClick={() => setShow(!show)}>
              <img loading="lazy"
                src={Arrowlogo}
                alt="arrow icon"
                style={{ transform: show && "rotateX(180deg)" }}
                className="mr-4"
              />
            </button>
          </div>
          {show && (
            <div className="absolute z-10 mt-5 p-5 bg-white border rounded-2xl w-[350px]  shadow-lg transition-all duration-500 ml-4 right-3">
              <div className="flex justify-between items-center mb-4 py-2 px-3">
                <button onClick={prevMonth} className="text-xl">
                  <img loading="lazy"
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
                                   ${
                                     currentMonth
                                       ? "text-black"
                                       : "text-gray-400"
                                   }
                                   hover:bg-blue-100 hover:text-black`}>
                    {date.getDate()}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mt-3 relative z-0">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <PopMessage />
      <Footer />
    </div>
  );
}
