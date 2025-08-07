import { Link } from "react-router-dom";


const CurrentLocation = () => {
  

  return (
    <div className=" bg-[url(src/assets/images/currentmap.svg)] w-[100%] h-[100dvh] relative">
        <Link
          to="/home"
        >
          <img
            src="src\assets\icons\arrow left.svg"
            alt="arrow left"
            className="absolute top-[4vh]  w-[40px] h-[40px] rounded-[25px] shadow-lg bg-white p-2 left-[25px]"
          />
        </Link>

   <img src="src\assets\images\Location Image.svg" alt="location" className="absolute top-[30vh] right-[50%]"/>
   <img src="src\assets\images\Location Image.svg" alt="location" className="absolute top-[20vh] right-[70%]"/>
   <img src="src\assets\images\Location Image.svg" alt="location" className="absolute top-[60vh] right-[80%]"/>
   <img src="src\assets\images\Location Image.svg" alt="location" className="absolute top-[10vh] right-[10%]"/>

    </div>
  );
};

export default CurrentLocation;
