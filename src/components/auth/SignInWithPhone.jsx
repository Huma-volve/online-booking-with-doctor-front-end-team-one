import { Link } from "react-router";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import TelInput from "../profile/TelInput";

function SignInWithPhone() {
  return (
    <div className="relative flex flex-col h-screen items-center md:justify-center justify-end">
      <div className="">
        <Link to="/SignInWithSocial">
          <img
          loading="lazy"
            className="block md:hidden absolute top-6 left-4"
            src={ArrowLeft}
            alt="Back"
          />
        </Link>

        <h2 className="text-center mb-10 md:mb-4 text-3xl font-[400]">
          Login to your Account
        </h2>

        <form
          action=""
          className="flex flex-col mb-14 md:mb-0 md:gap-2 gap-[2.2rem] w-[374px] md:w-[420px]"
        >
          <TelInput />
          <div className="mb-7 md:hidden flex items-center justify-around">
            <label className="flex items-center" htmlFor="terms-mobile">
              <input
                type="checkbox"
                id="terms-mobile"
                className="mr-2 w-[19px] h-[19px] border-[1.5px] border-[#99A2AB] rounded-xl"
              />
              Remember me
            </label>
          </div>
          <Link
            to="/OtpPhone"
            className="bg-[#145DB8] py-3 px-3 text-center text-white rounded-md"
          >
            Sign in
          </Link>
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <div className="text-[#99A2AB] text-[20px]">or</div>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <ul className="flex items-center justify-center md:gap-4 mb-6">
            <a className="border border-[#99A2AB] rounded-lg p-5 mr-24">
              <img
                className="text-lg w-[20px]"
                src={FacebookImg}
                alt="FacebookImg"
                loading="lazy"
              />
            </a>
            <a className="border border-[#99A2AB] rounded-lg p-5 mr-24">
              <img
                className="text-lg w-[20px]"
                loading="lazy"
                src={GoogleImg}
                alt="GoogleImg"
                
              />
            </a>
            <a className="border border-[#99A2AB] rounded-lg p-5">
              <img className="text-lg w-[20px]" src={AppleImg} alt="AppleImg" loading="lazy"/>
            </a>
          </ul>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#99A2AB]">Already have an account!</p>
            <Link to="/register" className="text-[#145DB8]">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInWithPhone;
