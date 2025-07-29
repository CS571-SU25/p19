import Countdown from "react-countdown";
import "./CountdownTimer.css";

const CountdownTimer = ({ eventDate }) => (
  <Countdown
    date={eventDate}
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
);

export default CountdownTimer;
