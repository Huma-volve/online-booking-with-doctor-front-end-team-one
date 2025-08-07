import { ListDoctor } from "../../data/data";

const ListMap = () => {
  return (
    <div className="overflow-y-auto h-[90vh] py-8">
      <div className="flex  items-center w-max flex-col  gap-2 ">
        {ListDoctor.map((doctor) => (
          <div key={doctor.id} className=" rounded-[10px] shadow-lg w-100 p-2">
            <div className="flex justify-between gap-[12px]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-[90px] h-[90px]"
              />
              <div>
                <h1 className="text-[#05162c] text-[16px]">{doctor.name}</h1>
                <p className="text-[#6D7379] text-[13px]">{doctor.specialty}</p>
                <div className="flex justify-between items-center gap-[10px] my-2">
                  <div className="flex items-center gap-2">
                    <img src="src\assets\icons\Star.svg" alt="rating" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="src\assets\icons\Clock Circle.svg" alt="rating" />
                    <span>{doctor.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListMap;
