import React from "react";
import { Link } from "react-router-dom";
import "./MissionPage.css"; // Use the same CSS as MissionPage

const About = () => (
  <main className="mission-container">
    <div className="mission-card">
      <h1 className="mission-title">About Us</h1>
      <p className="mission-text">
        We are a dedicated team committed to raising cancer awareness through impactful community events, education, and advocacy. Our mission is to empower individuals and families with knowledge, hope, and support.
      </p>
      <Link to="/" className="mission-back-link">
        ← Back to Home
      </Link>
    </div>
  </main>
);

export default About;
