import { Link } from "react-router";

// eslint-disable-next-line react/prop-types
export default function PayFooter({title , nav}){
 return(
     <div className=" w-full bottom-0 bg-white py-3 px-7 mt-5">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-800 font-semibold text-3xl">
            Price<span className="font-light text-sm"> \ hour</span>
          </p>
          <span className="text-lg font-semibold text-red-500">$350</span>
        </div>
        <Link to={nav} >
          <button className="w-full bg-blue-700 text-gray-100 py-3 rounded-xl hover:bg-blue-800 transition-all mt-2 mb-4">
            {title}
          </button>
        </Link> 
      </div>
 )
}