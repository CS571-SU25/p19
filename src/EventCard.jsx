import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = () => (
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
);

export default EventCard;
