import { Link } from "react-router-dom";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

/* eslint-disable react/prop-types */

export default function MenuItem({ item ,onClick }) {
  return (
    <>
      {item.path ? (
        <Link
          to={item.path}
          className="flex items-center justify-between p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          <div className="flex items-center">
            <img loading="lazy" src={item.icon} alt={item.title} className="mr-2" />
            <p className={item.title === "Logout" ? "text-red-500" : ""}>
              {item.title}
            </p>
          </div>
          <img loading="lazy" src={rightArrowIcon} alt="Right Arrow" />
        </Link>
      ) : (
        <div onClick={onClick} className="flex items-center justify-between p-2 bg-gray-100 rounded-md cursor-pointer">
          <div className="flex items-center">
            <img loading="lazy" src={item.icon} alt={item.title} className="mr-2" />
            <p className={item.title === "Logout" ? "text-red-500" : ""}>
              {item.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
