import  { useEffect } from "react";
import BsHeartPulseWhite from "../../assets/icons/BsHeartPulseWhite.png";
function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/onboarding1";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative bg-[#145DB8] h-screen flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center">
        <img loading="lazy" src={BsHeartPulseWhite} alt="Splash Screen" />
        <div className="flex items-center space-x-2 absolute bottom-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`rounded-full bg-white animate-bounce`}
              style={{
                width: `${30 - i * 6}px`,
                height: `${30 - i * 6}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
