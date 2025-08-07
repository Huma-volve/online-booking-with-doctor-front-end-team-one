import { Link } from "react-router-dom";

export default function AddReviewModalContent({onClose}) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-xl font-semibold pt-4">Thanks for your review</p>
      <button className="text-white bg-black rounded-full px-20  py-4 my-5" onClick={onClose}>
        Done
      </button>
      <Link className=" text-gray-400" to={"/"}>
        Back to Home
      </Link>
    </div>
  );
}
