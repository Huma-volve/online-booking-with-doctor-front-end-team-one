import { Link } from "react-router-dom";

// Import images
import currentMapBackground from "../../assets/images/currentmap.svg";
import arrowLeftIcon from "../../assets/icons/arrow left.svg";
import locationIcon from "../../assets/images/Location Image.svg";

const CurrentLocation = () => {
  return (
    <div
      className="w-[100%] h-[100dvh] relative"
      style={{
        backgroundImage: `url(${currentMapBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Link to="/home">
        <img loading="lazy"
          src={arrowLeftIcon}
          alt="arrow left"
          className="absolute top-[4vh]  w-[40px] h-[40px] rounded-[25px] shadow-lg bg-white p-2 left-[25px]"
        />
      </Link>

      <img loading="lazy"
        src={locationIcon}
        alt="location"
        className="absolute top-[30vh] right-[50%]"
      />
      <img loading="lazy"
        src={locationIcon}
        alt="location"
        className="absolute top-[20vh] right-[70%]"
      />
      <img loading="lazy"
        src={locationIcon}
        alt="location"
        className="absolute top-[60vh] right-[80%]"
      />
      <img loading="lazy"
        src={locationIcon}
        alt="location"
        className="absolute top-[10vh] right-[10%]"
      />
    </div>
  );
};

export default CurrentLocation;
