// Import images
import doctorImage from "../../assets/images/doctor.png";
import locationIcon from "../../assets/icons/Icon.png";

export default function DoctorHeader() {
  return (
    <div className="w-full flex gap-4 items-center sticky top-0 bg-white z-20 px-4 py-3">
      <img src={doctorImage} loading="lazy" alt="doctor profile" className="w-24 h-24" />
      <div className="flex flex-col">
        <h2 className="text-bold text-lg">Dr. Jennifer Turner</h2>
        <p className="text-gray-400 text-sm">Pulmonologist</p>
        <div className="flex gap-1 items-center">
          <img loading="lazy" src={locationIcon} alt="locationlogo" className="w-3 h-4" />
          <p className="text-gray-400 text-sm">129,El-Nasr Street, Cairo</p>
        </div>
      </div>
    </div>
  );
}
