import calenderLogo from "../../assets/icons/calendar.png";
import visaLogo from "../../assets/icons/visa.png";
import payLogo from "../../assets/icons/paypal.png";
import appleLogo from "../../assets/icons/pay.png";
import { Link } from "react-router";
import { useState } from "react";
import DoctorHeader from "../../../components/Booking/DoctorHeader";
import PayFooter from "../../../components/Booking/PayFooter";
export default function PayStripe() {
  const [selectedOption, setSelectedOption] = useState(false);
  return (
    <div className="bg-white max-w-[600px] flex flex-col">
      {/* Header */}
      <DoctorHeader />
      <div className="mt-5 flex justify-between ml-4 mr-4">
        <div className="flex gap-2 items-center">
          <img loading="lazy" src={calenderLogo} alt="calender logo" className="w-5 h-5" />
          <p className="text-gray-900 text-xs font-[400]">
            Friday,July 17 -4:00 pm
          </p>
        </div>
        <Link to="/bookApp">
          <p className="text-blue-500">Reschedule</p>
        </Link>
      </div>
      <div className="mt-12 ml-4">
        <h2 className="font-medium text-lg">Payment Method</h2>

        <div className="flex flex-col gap-3 items-center mt-4">
          <div
            onClick={() => setSelectedOption("credit")}
            className={`flex items-center h-14 justify-between w-full py-2 rounded-lg cursor-pointer pr-4 ${
              selectedOption === "credit"
                ? "bg-green-100"
                : "border-gray-300"
            }`}>
            <div className="flex items-center gap-2 ml-4">
              <input
                type="checkbox"
                checked={selectedOption === "credit"}
                onChange={() => setSelectedOption("credit")}
                className="w-5 h-5 accent-green-300 rounded-full cursor-pointer"
              />
              <span className="text-gray-500 ml-3 text-lg">Credit Card</span>
            </div>
            <img loading="lazy" src={visaLogo} alt="visa logo" className="w-11" />
          </div>

          {/* Paypal Option */}
          <div
            onClick={() => setSelectedOption("paypal")}
            className={`flex items-center h-14 justify-between w-full py-2 rounded-lg cursor-pointer pr-4  ${
              selectedOption === "paypal"
                ? "bg-green-100 "
                : "border-gray-300"
            }`}>
            <div className="flex items-center gap-2 ml-4">
              <input
                type="checkbox"
                checked={selectedOption === "paypal"}
                onChange={() => setSelectedOption("paypal")}
                className="w-5 h-5 accent-green-300 rounded-full cursor-pointer"
              />
              <span className="text-gray-500 ml-3 text-lg">Paypal</span>
            </div>
            <img loading="lazy" src={payLogo} alt="paypal logo" className="w-11" />
          </div>

          {/* Apple Pay Option */}
          <div
            onClick={() => setSelectedOption("apple")}
            className={`flex items-center h-14 justify-between w-full py-2 rounded-lg cursor-pointer pr-4  ${
              selectedOption === "apple"
                ? "bg-green-100"
                : "border-gray-300"
            }`}>
            <div className="flex items-center gap-2 ml-4">
              <input
                type="checkbox"
                checked={selectedOption === "apple"}
                onChange={() => setSelectedOption("apple")}
                className="w-5 h-5 accent-green-300 rounded-full cursor-pointer"
              />
              <span className="text-gray-500 ml-3 text-lg">Apple Pay</span>
            </div>
            <img loading="lazy" src={appleLogo} alt="apple logo" className="w-11" />
          </div>
        </div>
        <div className="w-full flex">
          <button className=" mt-8 w-[90%] font-medium py-3 m-auto text-blue-500 border-dashed border-blue-500 rounded-lg border-spacing-12 border-2">
            + Add new card
          </button> 
        </div>
      </div>
      <div className="w-full absolute bottom-0">
     <PayFooter title="Pay" nav="/profile" />
      </div>
    </div>
  );
}
