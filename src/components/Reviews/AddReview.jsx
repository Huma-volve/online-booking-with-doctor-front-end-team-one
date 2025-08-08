import CommonSettingsHeader from "../shared/CommonSettingsHeader";

import grayStarIcon from "../../assets/icons/gray-star-icon.svg";
import reviewStarIcon from "../../assets/icons/review-star-icon.svg";
import { useEffect, useRef, useState } from "react";
import Modal from "../shared/Modal";
import AddReviewModalContent from "../shared/AddReviewModalContent";
export default function AddReview() {
  const [showDoneModal, setShowDoneModal] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    if (showDoneModal && modalRef.current) {
      modalRef.current.open();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [showDoneModal]);

  const handleSendReview = () => {
    // Logic to send the review
    setShowDoneModal(true);
  };
  const handleCloseModal = () => {
    setShowDoneModal(false);
  };

  return (
    <>
      {showDoneModal && (
        <Modal
          ref={modalRef}
          onClose={handleCloseModal}
          className="rounded-t-[54px] md:max-w-[350px] lg:max-w-[450px]"
        >
          <AddReviewModalContent onClose={handleCloseModal} />
        </Modal>
      )}
      <div className="mx-3 my-5">
        <CommonSettingsHeader title="Add Review" />
        <section className="flex flex-col justify-between h-[calc(100dvh-100px)] ">
          <div>
            <div className="mb-4">
              <p className="">Your Rate</p>
              <div className="flex gap-2 items-center my-2 px-1 justify-between">
                <div className="flex items-center ">
                  {[...Array(4)].map((_, i) => (
                    <img
                    loading="lazy"
                      key={i}
                      src={reviewStarIcon}
                      alt="Review Star"
                      className="w-5 h-5 mx-0.5"
                    />
                  ))}
                  <img
                  loading="lazy"
                    src={grayStarIcon}
                    alt="Review Star"
                    className="w-5 h-5 mx-0.5"
                  />
                </div>
                <p className="text-2xl">4/5</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-2">Your Review</p>
              <textarea
                className="w-full border border-gray-400 p-2 rounded-lg outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Write your review..."
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleSendReview}
              className="block text-center  bg-[#145DB8] text-white py-2 rounded-lg w-full hover:bg-[#0f4a7c] transition-colors"
            >
              Send Your review
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
