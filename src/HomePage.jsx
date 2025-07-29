import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import DonationBanner from "./DonationBanner";
import CountdownTimer from "./CountdownTimer.jsx";
import EventCard from "./EventCard.jsx";
import Footer from "./Footer";
import "./HomePage.css";

const EVENT_DATE = new Date("2025-09-01T09:00:00");

const HomePage = () => {
  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate();

  const handleDonate = (amount) => {
    navigate(`/donate?amount=${amount}`);
  };

  return (
    <>
      {showBanner && (
        <DonationBanner
          onDonate={handleDonate}
          onClose={() => setShowBanner(false)}
        />
      )}

      <main className="home-container">
        <NavBar />
        <section className="countdown-container">
          <CountdownTimer eventDate={EVENT_DATE} />
          <p className="tagline">
            Join us to raise awareness and support cancer research.
          </p>
        </section>

        <section className="event-card-wrapper">
          <EventCard />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
