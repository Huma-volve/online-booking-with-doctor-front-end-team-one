import profileImage from "../../assets/images/profile-image.png";
import locationIcon from "../../assets/icons/location-icon.svg";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.svg";
import { Link } from "react-router-dom";

export default function ProfileHeader() {
  return (
    <Link to="/profile/edit">
      <div className=" my-3 flex items-center justify-between p-2 bg-gray-100 px-3 rounded-md">
        <div className="h-[60px] flex gap-2 items-center">
          <img loading="lazy" src={profileImage} alt="profile image" className="h-full" />
          <div>
            <h1>Seif Mohamed</h1>
            <p className="text-gray-500">
              <img
              loading="lazy"
                src={locationIcon}
                alt="location icon"
                className="inline-block mr-1"
              />
              129,El-Nasr Street, Cairo
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <img loading="lazy" src={rightArrowIcon} alt="right arrow icon" />
        </div>
      </div>
    </Link>
  );
}
