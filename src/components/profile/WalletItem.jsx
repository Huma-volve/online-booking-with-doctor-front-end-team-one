/* eslint-disable react/prop-types */
export default function WalletItem({ icon, title, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(title);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
    >
      <div className="flex items-center ">
        <img loading="lazy" src={icon} alt={title} className="mr-2" />
        <p>{title}</p>
      </div>
      <div className="flex items-center">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
            isSelected ? "bg-green-500 border-green-500" : "border-gray-400"
          }`}
        >
          {isSelected && (
            <svg
              className="w-3 h-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
