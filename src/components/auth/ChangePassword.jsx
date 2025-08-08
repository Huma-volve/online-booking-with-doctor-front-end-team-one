
import { Link } from "react-router";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import LockIcon from "../../assets/icons/Key Square 3.png";
function ChangePassword() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-start pt-40 md:justify-center">
      <div className="px-3 md:px-0">
        <div className="flex items-center justify-center gap-24 text-lg font-[400] mb-4 d-block md:hidden absolute top-6 left-4">
          <Link to="/ForgetPassword">
            <img className="" src={ArrowLeft} alt="Back" loading="lazy" />
          </Link>
          <p>Set new password</p>
        </div>
        <p className="text-start mb-5 font-[400]  text-[#404448]">
          Create a new password, ensure it different form your previous ones for
          security.
        </p>
        <form className="flex flex-col mb-14">
          {/* EMAIL */}
          <div className="relative mb-6">
            <img
            loading="lazy"
              src={LockIcon}
              alt="lock icon"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="relative">
            <img
              src={LockIcon}
              loading="lazy"
              alt="lock icon"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </form>
        <Link to="/login"
          className="bg-[#145DB8] text-white rounded-md py-3 px-32 m-auto my-5 text-base font-[400] flex items-center justify-center gap-2"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}

export default ChangePassword;
