/* eslint-disable react/prop-types */
import starIcon from "../../assets/icons/star-icon.svg";
import loveIcon from "../../assets/icons/love-icon.svg";
import locationIcon from "../../assets/icons/location-icon.svg";
import clockIcon from "../../assets/icons/clock-icon.svg";

export default function FavouriteItem({ item }) {
  return (
    <div className="w-full max-w-sm h-fit flex items-start gap-2 border rounded-2xl hover:shadow-md transition-shadow duration-200">
      <img loading="lazy" src={item.avatar} alt={item.name} />
      <div className="flex-1 p-1 pl-0 ">
        <h1>{item.name}</h1>
        <div className="flex items-center justify-between pr-1">
          <p className="flex gap-[2px] text-gray-500">
            {item.address && <img src={locationIcon} alt="location icon" />}
            {item.bio || item.address}
          </p>
          <img loading="lazy" src={loveIcon} alt="heart icon" />
        </div>
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1 t">
            <img loading="lazy" src={starIcon} alt="star icon" />
            {item.rating}
          </p>
          <p className=" flex items-center gap-1 text-sm">
            <img loading="lazy" src={clockIcon} alt="clock icon" />
            {item.appointmentTime}
          </p>
        </div>
      </div>
    </div>
  );
}
