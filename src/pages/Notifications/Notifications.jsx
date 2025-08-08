import NotificationItem from "../../components/Notifications/NotificationItem";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
import notificationEmptyImg from "../../assets/images/notification-empty-image.svg";
const notificationsIems = [
  { id: 1,title:"Upcoming Appointment", message: "Your appointment has been confirmed." ,time:"1h"},
  { id: 2,title:"Appointment Completed", message: "You have successfully booked your appointment with Dr. Emily Walker." ,time:"2h"},
  { id: 3,title:"Appointment Cancelled",  message: "You have successfully cancelled your appointment with Dr. David Patel." ,time:"3h"},
];

export default function Notifications() {
  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="Notifications" />
      <div className="mt-6 h-[calc(100dvh-100px)]">
        {notificationsIems.length > 0 &&
          notificationsIems.map((item) => (
            <NotificationItem
              key={item.id}
              title={item.title}
              message={item.message}
              time={item.time}
            />
          ))}
        {notificationsIems.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <img loading="lazy" src={notificationEmptyImg} alt="credit card" />
            <h1 className="text-lg">Nothing to display here!</h1>
            <p className="text-xs text-[#99A2AB]">
              We’ll notify you once we have new notifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
