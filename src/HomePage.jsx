import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";
import Countdown from "react-countdown";
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
                onClick={() => handleDonate(amt)}
              >
                ${amt}
              </button>
            ))}
            <button
              className="close-banner"
              onClick={() => setShowBanner(false)}
              aria-label="Close donation banner"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <main className="home-container">
        <Navbar expand="md" className="custom-navbar">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Cancer Awareness Run 2025
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/mission">Our Mission</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section className="countdown-container">
          <Countdown
            date={EVENT_DATE}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="countdown-timer">
                {[
                  { label: "Days", value: days },
                  { label: "Hours", value: hours },
                  { label: "Minutes", value: minutes },
                  { label: "Seconds", value: seconds },
                ].map(({ label, value }) => (
                  <div className="time-segment" key={label}>
                    <div className="digit">{String(value).padStart(2, "0")}</div>
                    <div className="label">{label}</div>
                  </div>
                ))}
              </div>
            )}
          />
          <p className="tagline">
            Join us to raise awareness and support cancer research.
          </p>
        </section>

        <section className="event-card-wrapper">
          <Card className="event-card shadow-sm">
            <Card.Body>
              <div className="event-details-header">Event Details</div>
              <p><strong>Date:</strong> September 1, 2025</p>
              <p><strong>Time:</strong> 9:00 AM</p>
              <p><strong>Location:</strong> Monona Terrace</p>
              <Button
                variant="primary"
                as={Link}
                to="/register"
                className="register-button"
              >
                Register Now
              </Button>
            </Card.Body>
          </Card>
        </section>
      </main>
    </>
  );
};

export default HomePage;
