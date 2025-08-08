import HeartImg from "../../assets/icons/BsHeartPulse.png";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import CurveRight from "../../assets/images/CurveRight.png";
import LineCurve from "../../assets/images/LineCurve.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import EmailIcon from "../../assets/icons/EmailIcon.png";
import LockIcon from "../../assets/icons/Key Square 3.png";
import { Link } from "react-router";
function SignInWithEmail() {
  return (
    <div className="relative flex flex-col h-screen items-stretch md:items-center justify-center">
      <div className="xl:absolute left-[20%] z-10">
        <Link to="/onboarding2">
          <img
            className="block md:hidden absolute top-6 left-4"
            src={ArrowLeft}
            alt="Back"
            loading="lazy"
          />
        </Link>
        <div className="text-center mb-4 flex flex-col items-center">
          <img
            src={HeartImg}
            loading="lazy"
            alt="Heart"
            className="w-[50px] h-[50px] md:absolute md:top-[-4rem] md:left-[-8rem]"
          />
          <h2 className="mt-10 text-3xl font-[400]">Sign in</h2>
        </div>

        <p className="hidden md:block text-[#6D7379] mb-7 text-sm">
          Please provide all information required to access your account{" "}
        </p>
        <form action="" className="flex flex-col mx-2 md:mx-0">
          {/* EMAIL */}
          <label className="text-base md:block hidden" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <img
              src={EmailIcon}
              alt="email icon"
              loading="lazy"
              className="pointer-events-none absolute left-3 top-[2.1rem] -translate-y-1/2 w-5 h-4 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full mt-2 mb-4"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          {/* PASSWORD */}
          <label className="text-base md:block hidden" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <img
              src={LockIcon}
              loading="lazy"
              alt="lock icon"
              className="pointer-events-none absolute left-3 top-[2.1rem] -translate-y-1/2 w-5 h-5 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full mt-2 mb-4"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <Link
            to="/ForgetPassword"
            className="md:text-[#145DB8] text-[#99A2AB] md:mt-2 -mt-3 mb-7 -ml-2 text-md text-end"
          >
            Forget the password?
          </Link>

          <Link
            to="/home"
            className="text-center bg-[#145DB8] py-3 px-3 text-white rounded-md"
          >
            Sign in
          </Link>
        </form>
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <div className="text-[#99A2AB] text-[20px]">or</div>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <ul className="flex items-center justify-around md:gap-4 mb-6">
          <a className="border border-[#99A2AB] rounded-lg p-5">
            <img
              loading="lazy"
              className="w-[20px]"
              src={FacebookImg}
              alt="FacebookImg"
            />
          </a>
          <a className="border border-[#99A2AB] rounded-lg p-5">
            <img
              loading="lazy"
              className="w-[20px]"
              src={GoogleImg}
              alt="GoogleImg"
            />
          </a>
          <a className="border border-[#99A2AB] rounded-lg p-5">
            <img
              loading="lazy"
              className="w-[20px]"
              src={AppleImg}
              alt="AppleImg"
            />
          </a>
        </ul>
        <div className="flex items-center justify-center gap-2">
          <p className="text-[#99A2AB]">Don’t have an account?</p>
          <Link to="/register" className="text-[#145DB8]">
            Sign up
          </Link>
        </div>
      </div>
      <img
        src={CurveRight}
        alt="Background Curve"
        loading="lazy"
        className="absolute opacity-100 w-[930px] 2xl:w-[1254px] right-0 top-0  h-screen hidden xl:block"
      />
      <img
        src={LineCurve}
        alt="Background Curve"
        loading="lazy"
        className="absolute w-[930px] 2xl:w-[1254px] right-[7px] top-0 opacity-100 h-screen hidden xl:block"
      />
    </div>
  );
}

export default SignInWithEmail;
