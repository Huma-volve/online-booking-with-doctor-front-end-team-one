import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
import visaIcon from "../../assets/icons/visa-icon.svg";
import WalletItem from "../../components/profile/WalletItem";
import criditcardImg from "../../assets/images/credit-card-image.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const cards = [
    {
      icon: visaIcon,
      title: "Axis Bank 450***49",
    },
];

export default function PaymentCards() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleWalletSelect = (walletTitle) => {
    // If the wallet is already selected, deselect it; otherwise, select the new wallet
    setSelectedWallet(selectedWallet === walletTitle ? null : walletTitle);
  };
  return (
    <div className="mx-3 my-5">
      <CommonSettingsHeader title="Payment Method" />

      <div className="space-y-2 flex flex-col justify-between h-[calc(100dvh-100px)]">
        <div>
          {cards.length > 0 ? (
            cards.map((card, index) => (
              <WalletItem
                key={index}
                icon={card.icon}
                title={card.title}
                isSelected={selectedWallet === card.title}
                onSelect={handleWalletSelect}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-between">
              <img loading="lazy" src={criditcardImg} alt="credit card" />
              <h1 className="text-lg">Nothing to display here!</h1>
              <p className="text-xs text-[#99A2AB]">
                Add your cards to make payment easier
              </p>
            </div>
          )}
        </div>
        {selectedWallet && cards.length > 0 ? (
          <Link
            to="/profile"
            className="block text-center  bg-[#145DB8] text-white py-2 rounded-lg w-full hover:bg-[#0f4a7c] transition-colors"
          >
            Next
          </Link>
        ) : (
          <Link
            to="/profile/payment/add-new-card"
            className="block text-center  bg-[#145DB8] text-white py-2 rounded-lg w-full hover:bg-[#0f4a7c] transition-colors"
          >
            + Add Card
          </Link>
        )}
      </div>
    </div>
  );
}
