export default function ModalContent({
  title,
  description,
  acceptTitle,
  handleCloseModal,
  handleAction,
}) {
  return (
    <>
      <p className="text-lg font-semibold text-center border-b pb-4">{title}</p>
      <p className="text-center text-xs text-gray-500 pt-2">{description}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleCloseModal}
          className="bg-[#BBC1C7] py-[10px] px-[20px] sm:px-[80px] text-black rounded-xl text-sm outline-none"
        >
          Cancel
        </button>
        <button
          onClick={handleAction}
          className="bg-[#145DB8] py-[10px] px-[20px] sm:px-[80px] text-white rounded-xl text-sm outline-none"
        >
          {acceptTitle}
        </button>
      </div>
    </>
  );
}
