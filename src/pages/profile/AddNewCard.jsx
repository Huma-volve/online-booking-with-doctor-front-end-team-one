import { useState } from "react";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
import addNewCardImg from "../../assets/images/add-new-card-image.png";
import closeEyeIcon from "../../assets/icons/close-eye-icon.svg";
import openEyeIcon from "../../assets/icons/open-eye-icon.svg";
import { Link } from "react-router-dom";

export default function AddNewCard() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const toggleCardNumberVisibility = () => {
    setIsCardNumberVisible(!isCardNumberVisible);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value;
    // Only allow 3 digits
    if (value.length <= 3 && /^\d*$/.test(value)) {
      setCvv(value);
    }
  };

  const handleExpiryChange = (value, type) => {
    if (type === "month") {
      // Only allow 2 digits and max 12
      if (
        value.length <= 2 &&
        /^\d*$/.test(value) &&
        (value === "" || parseInt(value) <= 12)
      ) {
        setExpiryMonth(value);
      }
    } else if (type === "year") {
      // Only allow 2 digits
      if (value.length <= 2 && /^\d*$/.test(value)) {
        setExpiryYear(value);
      }
    }
  };

  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="Add New Card" />
      <div className="h-[calc(100dvh-100px)]">
        <div className="flex flex-col items-center mb-6">
          <img loading="lazy" src={addNewCardImg} alt="Add New Card" className="mb-6" />

          <form className="w-full">
            {/* Cardholder Name */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </h3>
              <div className="bg-[#F5F6F7] pr-[24px] pl-[16px] py-2 rounded-md">
                <input
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder="Cardholder name"
                  className="bg-transparent border-none outline-none w-full"
                />
              </div>
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Card Number
              </h3>
              <div className="flex items-center gap-2 bg-[#F5F6F7] pr-[16px] pl-[24px] py-2 rounded-md">
                <input
                  type={isCardNumberVisible ? "text" : "password"}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Card number"
                  className="bg-transparent border-none outline-none flex-1"
                />
                <button
                  type="button"
                  onClick={toggleCardNumberVisibility}
                  className="p-1"
                >
                  <img loading="lazy"
                    src={isCardNumberVisible ? openEyeIcon : closeEyeIcon}
                    alt={
                      isCardNumberVisible
                        ? "Hide card number"
                        : "Show card number"
                    }
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>

            {/* Expiry Date and CVV Row */}
            <div className="flex gap-4 mb-6">
              {/* Expiry Date */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </h3>
                <div className="flex items-center bg-[#F5F6F7] pr-[10px] pl-[10px] py-2 rounded-md w-fit">
                  <input
                    type="text"
                    value={expiryMonth}
                    onChange={(e) =>
                      handleExpiryChange(e.target.value, "month")
                    }
                    placeholder="MM"
                    className="bg-transparent border-none outline-none w-8 text-center"
                    maxLength="2"
                  />
                  <span className="mx-2 bg-gray-800 w-[1px] h-[20px]"></span>
                  <input
                    type="text"
                    value={expiryYear}
                    onChange={(e) => handleExpiryChange(e.target.value, "year")}
                    placeholder="YY"
                    className="bg-transparent border-none outline-none w-8 text-center"
                    maxLength="2"
                  />
                </div>
              </div>

              {/* CVV Code */}
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  CVV Code
                </h3>
                <div className="bg-[#F5F6F7] pr-[24px] pl-[16px] py-2 rounded-md w-fit">
                  <input
                    type="text"
                    value={cvv}
                    onChange={handleCvvChange}
                    placeholder="000"
                    className="bg-transparent border-none outline-none w-full text-center"
                    maxLength="3"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Link
              to={'/profile/payment/method'}
              className="block text-center w-full bg-[#145DB8] text-white py-2 my-3 rounded-lg hover:bg-[#0f4a7c] transition-colors"
            >
              Save
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
