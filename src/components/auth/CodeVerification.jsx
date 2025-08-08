import  { useRef } from "react";
import { Link } from "react-router";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
function CodeVerification() {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // Move to next input
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else {
      // Clear invalid input
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  return (
    <div className="relative flex flex-col h-screen items-center justify-start pt-40 md:justify-center">
      <div className="">
        <div className="flex items-center justify-center gap-28 text-lg font-[400] mb-4 d-block md:hidden absolute top-6 left-4">
          <Link to="/ForgetPassword">
            <img className="" src={ArrowLeft} loading="lazy" alt="Back" />
          </Link>
          <p>Code Verification</p>
        </div>
        <p className="text-center mb-2 text-[#404448]">
          Code has been send to your email
        </p>
        <p className="text-center mb-14 text-[#404448]">
          Check your Email
        </p>
        <div className="flex justify-center items-center gap-4 my-6">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              className="w-14 h-14 text-center text-xl border border-[#99A2AB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#145DB8]"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputs.current[i] = el)}
            />
          ))}
        </div>
        <p className="text-[#99A2AB] text-center mb-20">
          Resend code in <span className="text-[#145DB8]">55</span> s
        </p>
        <Link to="/ChangePassword" className="bg-[#145DB8] text-white rounded-md py-3 px-36 m-auto my-5 text-base font-[400] flex items-center justify-center gap-2">
          {" "}
          Verify Code
        </Link>
      </div>
    </div>
  );
}

export default CodeVerification;
