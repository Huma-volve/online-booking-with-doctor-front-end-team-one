import warning from "../../assets/icons/Image.png";

// eslint-disable-next-line react/prop-types
export default function PopMessage({ shown, onClose }) {
  if (!shown) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-[90%]"
      >
        <div className="flex flex-col items-center text-center">
          <img loading="lazy"src={warning} alt="warning" className="w-20 h-20 mb-4" />
          <h2 className="text-xl font-bold text-orange-400 mb-2">Warning!</h2>
          <p className="text-gray-500 mb-2">
            Cancellation must be made at least 24 hours in advance to receive a refund
          </p>
          <p className="text-gray-500 mb-4">Are you sure?</p>
          <button
            onClick={onClose}
            className="bg-gray-900 text-white px-6 py-3 rounded-full"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
