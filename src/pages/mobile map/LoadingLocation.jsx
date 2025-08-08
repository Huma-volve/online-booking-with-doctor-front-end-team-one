import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import loadingLocationBackground from "../../assets/images/loding-location.svg";
import profileImage from "../../assets/images/Ellipse 1538.png";

const LoadingLocation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/location-search");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="w-[100%] h-[100dvh] relative"
      style={{
        backgroundImage: `url(${loadingLocationBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img loading="lazy"
        src={profileImage}
        alt="profile"
        className="w-[100px] h-[100px] absolute top-[45vh] left-[40%]"
      />
    </div>
  );
};

export default LoadingLocation;
