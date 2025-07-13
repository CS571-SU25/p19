import React from "react";
import { Link } from "react-router-dom";
import "./MissionPage.css"; // Add this for styles

const MissionPage = () => (
  <main className="mission-container">
    <div className="mission-card">
      <h1 className="mission-title">Our Mission</h1>
      <p className="mission-text">
        Our mission is to inspire hope, increase awareness, and support those affected by cancer through compassionate outreach, education, and advocacy.
      </p>
      <Link to="/" className="mission-back-link">← Back to Home</Link>
    </div>
  </main>
);

export default MissionPage;
