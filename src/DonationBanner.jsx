import "./DonationBanner.css";

const DonationBanner = ({ onDonate, onClose }) => (
  <div className="donation-banner">
    <div className="donation-text">
      🎗️ Help us make a difference.
      <strong> Donate today to support cancer research and awareness.</strong>
    </div>
    <div className="donation-buttons">
      {[1, 5, 10, 25, 100, 1000].map((amt) => (
        <button
          key={amt}
          className="donation-amount"
          onClick={() => onDonate(amt)}
        >
          ${amt}
        </button>
      ))}
      <button
        className="close-banner"
        onClick={onClose}
        aria-label="Close donation banner"
      >
        ×
      </button>
    </div>
  </div>
);

export default DonationBanner;
