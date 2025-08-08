/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

export default function CommonSettingsHeader({title}) {
  return (
    <div className="flex items-center  mb-4">
      <Link to=".." relative="path" className="block pl-2 pr-4  py-4 mb-4 ml-2">
        <img loading="lazy" src={rightArrowIcon} alt="Right Arrow" className="rotate-180" />
      </Link>
      <h1 className="text-xl mx-auto font-semibold mb-4">{title}</h1>
    </div>
  );
}
