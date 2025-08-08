import { Link } from "react-router";
import Onboarding1 from "../../assets/images/Hand_and_iPhone_16_Pro.png";

function Onboarding1Page() {
  return (
    <div className="relative flex flex-col items-center justify-around h-screen">
      <button>
        <Link to="/register" className="text-gray-500 text-lg absolute top-4 right-4">Skip</Link>
        <img loading="lazy" src={Onboarding1} alt="Onboarding1" />
      </button>
      <div>
        <div>
          <h3 className="text-center text-2xl">Book Your Appointment Easily</h3>
          <p className="text-center text-gray-500 mt-4 px-14">
            Choose your preferred doctor, pick a suitable time, and confirm your
            visit in just a few taps. No calls, no waiting—just simple and fast
            booking.
          </p>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                0 === index
                  ? "w-6 bg-[#145DB8]"
                  : "w-2 bg-gray-300 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
      <Link
        to="/onboarding2"
        className="bg-[#145DB8] text-white text-lg text-center py-3 px-[176px] rounded"
      >
        Next
      </Link>
    </div>
  );
}

export default Onboarding1Page;
