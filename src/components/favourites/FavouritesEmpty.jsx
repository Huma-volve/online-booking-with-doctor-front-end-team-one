import favouritesImg from "../../assets/images/favourites-image.svg";

export default function FavouritesEmpty() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img loading="lazy" src={favouritesImg} alt="favourites" />
      <h1 className="text-lg">Your favorite!</h1>
      <p className="text-xs text-[#99A2AB]">
       Add your favorite to find it easily
      </p>
    </div>
  );
}
