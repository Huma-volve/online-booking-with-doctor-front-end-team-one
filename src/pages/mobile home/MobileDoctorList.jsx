import { Link } from "react-router-dom";
import { ListDoctor } from "../../data/data";

const MobileDoctorList = () => {
  return (
    <div className="flex flex-col gap-4  mb-[5vh]">
      {ListDoctor.map((doctor) => (
        <Link to="/doctorDetailes">
          <div
            key={doctor.id}
            className="flex w-[96%] ml-[2%]  gap-1 justify-between pr-4 border border-[#BBC1C7] rounded-[15px]"
          >
            <div className="flex">
              <img src={doctor.image} alt={doctor.name} />
              <div className="flex flex-col gap-1 py-3 pl-2 pr-4 ">
                <h1 className="font-medium text-[14px]">{doctor.name}</h1>
                <p className="text-[#6D7379] text-[11px]">{doctor.specialty}</p>
                <div className="flex gap-3 text-[11px]">
                  <div className="flex gap-1 items-center ">
                    <img
                      src="src\assets\icons\Star.svg"
                      alt="rate"
                      className="w-[16px] "
                    />
                    <p>{doctor.rating}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      src="src\assets\icons\Clock Circle.svg"
                      alt="date"
                      className="w-[16px] "
                    />
                    <p>{doctor.date}</p>
                  </div>
                </div>
              </div>
            </div>
            {doctor.like ? (
              <img src="src\assets\icons\liked.svg" alt="like" />
            ) : (
              <img src="src\assets\icons\like.svg" alt="like" />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default MobileDoctorList;
