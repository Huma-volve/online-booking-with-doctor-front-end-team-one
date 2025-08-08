import phone from "../../assets/icons/phonefoot.png";
import care from "../../assets/icons/like.svg";
import facebook from "../../assets/icons/face.png";
import whats from "../../assets/icons/whatapp.png";
import linked from "../../assets/icons/linked.png";
import tube from "../../assets/icons/youtube.png";
import location from "../../assets/icons/locfoot.png";
import message from "../../assets/icons/footmess.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-[#05162C] mt-12 py-10 text-white">
      {/* Top section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 px-6 md:px-12 mb-8">
        {/* Right side (logo + description + socials) */}
        <div className="flex flex-col gap-5 lg:w-[40%]">
          <div className="flex items-center gap-3">
            <img loading="lazy" src={care} alt="logo" className="w-10" />
            <h2 className="text-2xl font-medium">Cure</h2>
          </div>

          <p className="max-w-[300px] text-gray-300">
            Cure helps you find trusted doctors, book appointments, and manage
            your health — quickly and easily.
          </p>

          <div className="flex gap-4 mt-2 flex-wrap">
            <button className="bg-gray-100 rounded-lg p-3">
              <img loading="lazy" src={facebook} alt="facebook icon" />
            </button>
            <button className="bg-gray-100 rounded-lg p-3">
              <img loading="lazy" src={whats} alt="group icon" />
            </button>
            <button className="bg-gray-100 rounded-lg p-3">
              <img loading="lazy" src={linked} alt="linkedin icon" />
            </button>
            <button className="bg-gray-100 rounded-lg p-3">
              <img loading="lazy" src={tube} alt="youtube icon" />
            </button>
          </div>
        </div>

        {/* Left side (links) */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 lg:w-[60%] justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
             <Link to="/">
             <li>Home</li>
             </Link> 
              <Link to="/doctors" >
              <li>Doctors</li>
              </Link>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>Help Center</li>
              <li>How it works</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>
                <div className="flex gap-2 items-center">
                  <img loading="lazy" src={phone} alt="phone logo" />
                  <p>Phone</p>
                </div>
                <h4 className="ml-5">080 707 555 371</h4>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <img loading="lazy" src={message} alt="email logo" />
                  <p>Email</p>
                </div>
                <h4 className="ml-5">demo@example.com</h4>
              </li>
              <li>
                <div className="flex gap-2 items-center">
                  <img loading="lazy" src={location} alt="address logo" />
                  <p>Address</p>
                </div>
                <h4 className="max-w-[140px] ml-5">
                  575 Merlos Street, Water Mill, 11976 New York
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 px-6 md:px-12 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2024 Techivo — All Rights Reserved</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
}
