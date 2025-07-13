import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./DonationForm.css";

const DonationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Preload amount from query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const amountParam = params.get("amount");
    if (amountParam) {
      setFormData((prev) => ({ ...prev, amount: amountParam }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          amount: formData.amount,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  if (submitted) {
    return (
      <div className="donation-popup">
        <div className="popup-content">
          <h2>Thank you for your donation!</h2>
          <p>A receipt has been sent to your email.</p>
          <button onClick={() => navigate("/")}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="donation-popup">
      <div className="popup-content">
        <h2>Complete Your Donation</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="amount"
            type="number"
            placeholder="Donation Amount"
            value={formData.amount}
            onChange={handleChange}
            required
            min="1"
          />
          <button type="submit">Donate</button>
        </form>
        <button
          className="close-btn"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DonationForm;
