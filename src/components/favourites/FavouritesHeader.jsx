
export default function FavouritesHeader({ activeFavourites, setActiveFavourites }) {
  return (
    <header className="flex justify-between items-center mb-4 ">
        <div
          className={`px-2 text-center w-[50%] ${
            activeFavourites === "doctors"
              ? "text-[#145DB8] border-b-2 border-[#145DB8]"
              : ""
          }`}
          onClick={() => setActiveFavourites("doctors")}
        >
          Doctors
        </div>
        <div
          className={`px-2 text-center w-[50%] ${
            activeFavourites === "hospitals"
              ? "text-[#145DB8] border-b-2 border-[#145DB8]"
              : ""
          }`}
          onClick={() => setActiveFavourites("hospitals")}
        >
          Hospitals
        </div>
      </header>
  )
}
