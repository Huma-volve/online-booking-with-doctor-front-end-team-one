import MenuItem from "./MenuItem";
import PROFILE_MENU_ITEMS from "../../data/profileMenuItems";
import bellIcon from "../../assets/icons/bell.svg";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function MenuSection({ onLogout }) {
  const [notificationToggle, setNotificationToggle] = useState(true);

  const handleNotificationToggle = () => {
    setNotificationToggle(!notificationToggle);
  };
  return (
    <div className="w-full flex flex-col gap-4">
      <div
        className="flex items-center justify-between p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        onClick={handleNotificationToggle}
      >
        <div className="flex items-center">
          <img loading="lazy" src={bellIcon} alt="Notifications" className="mr-2" />
          <p>{"notifications"}</p>
        </div>
        <button
          onClick={handleNotificationToggle}
          className={`transition-all duration-150 ${
            notificationToggle
              ? "justify-end bg-[#4CAF50] "
              : "justify-start bg-gray-500"
          } flex w-[50px] h-[28px] rounded-full p-1 `}
        >
          <div className="bg-white w-[50%] h-full rounded-full"></div>
        </button>
      </div>
      {PROFILE_MENU_ITEMS.map((item) => (
        <MenuItem key={item.id} item={item} onClick={onLogout} />
      ))}
    </div>
  );
}
