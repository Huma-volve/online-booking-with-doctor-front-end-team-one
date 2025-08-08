import { Link } from "react-router-dom";
import ListMap from "./ListMap";

// Import images
import closeIcon from "../../assets/icons/close.svg";
import mapImage from "../../assets/images/Frame 1000001299.svg";

const Map = () => {
  return (
    <>
      <div className="flex justify-between items-center px-12 py-3">
        <h1 className="text-[24px]">24 Results</h1>
        <Link to="/doctors">
          <img loading="lazy" src={closeIcon} alt="back" className="w-[15px]" />
        </Link>
      </div>
      <div className="flex gap-4 lg:px-36 w-full items-center flex-wrap justify-around">
        <ListMap />
        <img loading="lazy" src={mapImage} alt="map" className="h-[90vh]" />
      </div>
    </>
  );
};
export default Map;
