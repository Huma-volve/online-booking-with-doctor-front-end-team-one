import calender from "../../assets/icons/calendar-02.png";
import blueCalender from "../../assets/icons/calendar.png";
import arrow from "../../assets/icons/arrow.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import yellowstarIcon from "../../assets/icons/yellowstar.png";
import stars from "../../assets/icons/stars.png";
import penIcon from "../../assets/icons/pen.png";
import patient from "../../assets/images/nabila.png";
import profileIcon from "../../assets/icons/profileCard.svg";
import meesageIcon from "../../assets/icons/messages.svg";
import medalIcon from "../../assets/icons/medal.svg";
import doctorlogo from "../../assets/images/doctor.png";
import starIcon from "../../assets/icons/star.png";
import map from "../../assets/images/fullMap.png";
import Footer from "../../components/Footer/Footer";
import PayStripe from "./PayStripe";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function DoctorFullPage() {
  const [expanded, setExpanded] = useState(false);
   const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
    const [showPay, setShowPay] = useState(false);
    const modalRef = useRef();

  // Function to close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowPay(false);
      }
    }

    if (showPay) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPay]);

  const dates = [
    { id: 1, title: "Fri", day: 7 },
    { id: 2, title: "Sat", day: 8 },
    { id: 3, title: "Sun", day: 9 },
    { id: 4, title: "Mon", day: 10 },
    { id: 5, title: "Tus", day: 11 },
    { id: 6, title: "Wed", day: 12 },
    { id: 7, title: "Thu", day: 13 },
  ];
  const times = [
    "8:00 Am",
    "8:00 Am",
    "9:00 Am",
    "12:00 Am",
    "2:00 Pm",
    "8:00 Pm",
    "6:00 Pm",
    "11:00 Pm",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* body */}
      <div className="flex mt-8 ml-4 mr-4">
        {/* left side */}
        <div className="w-[75%] flex flex-col">
      <div className="ml-4 flex gap-3 items-center mb-8">
        <Link to="/">
        <img loading="lazy" src={arrowRight} alt="back" className="rotate-180 w-4 h-4" />
        </Link>
        <h2 className="text-gray-700 ">Make an Appoinment</h2>
      </div>
          {/* top */}
          <div className="w-[100%] border rounded-lg border-gray-200 flex flex-col">
            {/* choose date */}
            <div className="flex justify-between items-center mt-4 ml-4">
              <p className="text-gray-500 text-xl">Choose date and time</p>
              <div className="flex gap-4 mr-4 items-center">
                <img loading="lazy" src={calender} alt="calendar icon" className="w-5 h-5" />
                <p className="text-lg text-gray-500">August,2024</p>
                <div className="flex flex-col gap-2 items-center">
                  <img loading="lazy" src={arrow} alt="up arrow" className="w-3" />
                  <img loading="lazy"
                    src={arrow}
                    alt="down arrow"
                    className="w-3 rotate-180"
                  />
                </div>
              </div>
            </div>
            <hr className="m-auto w-[85%] mt-3 mb-8 bg-gray-300 rounded-md shadow" />
            {/* dates */}
            <div className="mt-4 flex flex-col items-center ml-2 mr-2">
              {/* date */}
              <div className="flex justify-between gap-2 items-center w-full">
                {dates.map((date) => (
                  <button
                    key={date.id}
                    onClick={() => setSelectedDate(date.id)}
                    className={`w-[70px] p-2 rounded-xl ${
                    selectedDate === date.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                    >
                    <p>{date.title}</p>
                    <p>{date.day}</p>
                  </button>
                ))}
              </div>
              {/* times */}
              <div className="mt-8 flex gap-5 flex-wrap w-full">
                {times.map((time, index) => (
                  <button
                    key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-4 rounded-lg text-sm ${
                    selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
            {/* book */}
            <div className="mt-7 flex justify-between items-center mr-4 ml-4 mb-4">
              <div className="flex gap-2 items-center">
                <img loading="lazy"
                  src={blueCalender}
                  alt="calandar icon"
                  className="w-4 h-4"
                />
                <p className="text-gray-800">Monday,August 15 -11:00 Am</p>
              </div>
              <button 
              className="border border-blue-500 text-blue-500 rounded-md py-2 px-6 text-lg  hover:bg-blue-500
               hover:text-white transition-all duration-150"
               onClick={()=>setShowPay(true)}
               >
                Book
              </button>
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div className=" mt-2 p-2 mr-4">
              <div className="flex justify-between">
                <h3 className="font-medium text-[18px]">Reviews and Rating</h3>
                <div className="flex items-center mr-2 gap-1">
                  <img loading="lazy" src={penIcon} alt="EDit Icon" className="w-4 h-4" />
                  <Link to="/add-review">
                  <button className="text-sm text-blue-700">add review</button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-between mt-8 items-center">
                <h2 className="text-4xl font-medium">4.5/5</h2>
                <div className="flex flex-col items-center gap-1">
                  <img loading="lazy" src={stars} alt="Rating" />
                  <p className="text-gray-400 font-medium">1250+ Reviews</p>
                </div>
              </div>
            </div>
            {/* AllReviews */}
            <div className="flex gap-3">
              {/* reviewCard */}
              <div className="flex flex-col p-6 mt-4 mr-4 border rounded-lg shadow border-gray-300">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <img loading="lazy"
                      src={patient}
                      alt="patient Review"
                      className="rounded-full bg-[#D7D7E4] w-16 h-14"
                    />
                    <div className="flex flex-col ml-1">
                      <h3 className="font-medium">Nabila Reyna</h3>
                      <p className="text-gray-500 text-sm">30 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#F9E0001A] rounded-lg mt-2">
                    <img loading="lazy" src={yellowstarIcon} alt="icon" className="h-4 w-4" />
                    <p className="text-yellow-500 font-medium">4.5</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-500 text-sm">
                  Excellent service! Dr.Jessica Turner was attentive and
                  through. The clinic was clean, and the staff were friendlly.
                  Highly recommend for in-person care!
                </p>
              </div>
              <div className="flex flex-col p-6 mt-4 mr-4 border rounded-lg shadow border-gray-300">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 items-center">
                    <img loading="lazy"
                      src={patient}
                      alt="patient Review"
                      className="rounded-full bg-[#D7D7E4] w-16 h-14"
                    />
                    <div className="flex flex-col ml-1">
                      <h3 className="font-medium">Nabila Reyna</h3>
                      <p className="text-gray-500 text-sm">30 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 p-2 bg-[#F9E0001A] rounded-lg mt-2">
                    <img loading="lazy" src={yellowstarIcon} alt="icon" className="h-4 w-4" />
                    <p className="text-yellow-500 font-medium">4.5</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-500 text-sm">
                  Excellent service! Dr.Jessica Turner was attentive and
                  through. The clinic was clean, and the staff were friendlly.
                  Highly recommend for in-person care!
                </p>
              </div>
            </div>
            {/* End of right */}
          </div>
        </div>
        {/* Right Side */}
        <div className="w-auto flex flex-col bg-gray-100 rounded-lg ml-12">
          {/* profile doctor */}
          <div className="flex flex-col gap-4 items-center mt-8">
            <img loading="lazy" src={doctorlogo} alt="doctor profile" className="w-24 h-24" />
            <div className="flex flex-col items-center">
              <h2 className="text-bold text-lg">Dr. Jennifer Turner</h2>
              <p className="text-gray-800 text-sm">Pulmonologist</p>
            </div>
          </div>
          {/* about Doctor */}
          <div className="w-full flex justify-between mt-2 p-4">
            <div className="flex flex-col items-center">
              <img loading="lazy" src={profileIcon} alt="profile Icon" className=" bg-white rounded-full p-3" />
              <h4 className="mt-3 text-gray-900 font-medium text-sm">2,000+</h4>
              <p className="text-sm text-gray-500">patients</p>
            </div>
            <div className="flex flex-col items-center">
              <img loading="lazy" src={medalIcon} alt="Medal Icon" className="bg-white rounded-full p-3" />
              <h4 className="mt-3 text-gray-900 font-medium text-sm">10+</h4>
              <p className="text-sm text-gray-500">experience</p>
            </div>
            <div className="flex flex-col items-center">
              <img loading="lazy"
                src={starIcon}
                alt="Star Icon"
                className="bg-white rounded-full p-4  mb-1"
              />
              <h4 className="mt-3 text-gray-900 font-medium text-sm">4.5</h4>
              <p className="text-sm text-gray-500">rating</p>
            </div>
            <div className="flex flex-col items-center">
              <img loading="lazy" src={meesageIcon} alt="Messages Icon" className="bg-white rounded-full p-3" />
              <h4 className="mt-3 text-gray-900 font-medium text-sm">1,872</h4>
              <p className="text-sm text-gray-500">reviews</p>
            </div>
          </div>
          {/* About  */}
          <div className="mt-4 ml-4">
            <h2 className="mb-1 text-xl font-medium p-2 ">About Me</h2>
            <p className="text-gray-500 mr-2 text-sm leading-6 ml-2 transition-all duration-150 max-w-[350px]">
              Dr. Jessica Turner, a board-certified Pulmonologist with over 8
              years of experience in diagnosing and treating a wide range of
              respiratory and
              {!expanded && ""}
              {expanded && (
                <>
                  lung-related conditions. I specialize in asthma, COPD, chronic
                  cough, and sleep-related breathing disorders.
                </>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-600 ml-1 focus:outline-none">
                {expanded ? "Read less" : "Read more"}
              </button>
            </p>
          </div>
          <div className="flex flex-col mt-3 ml-4 mb-4">
            <h2 className="mb-1 text-xl font-medium p-2">Location</h2>
            <img loading="lazy" src={map} alt="map" className="w-[85%]" />
          </div>
        </div>
      </div>
      <Footer />
       {/* Popup Modal for Payment */}
     {showPay && (
      <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div
          ref={modalRef}
          className="bg-white w-[425px] rounded-lg relative h-[93%] overflow-y-hidden container animate-slide-in-right"
        >
          <button
            className="absolute top-2 right-4 text-gray-500 text-xl mb-2"
            onClick={() => setShowPay(false)}
          >
            &times;
          </button>
          <PayStripe />
        </div>
      </div>
    )}
    </div>
  );
}
