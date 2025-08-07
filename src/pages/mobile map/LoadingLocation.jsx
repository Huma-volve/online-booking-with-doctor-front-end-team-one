import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingLocation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/location-search");
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="bg-[url(src/assets/images/loding-location.svg)] w-[100%] h-[100dvh] relative">
      <img
        src="src/assets/images/Ellipse 1538.png"
        alt="profile"
        className="w-[100px] h-[100px] absolute top-[45vh] left-[40%]"
      />
    </div>
  );
};

export default LoadingLocation;
