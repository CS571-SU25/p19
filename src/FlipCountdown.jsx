import { useEffect } from "react";

const FlipCountdown = ({ endDate }) => {
  useEffect(() => {
    const flipdown = new window.FlipDown(Math.floor(endDate.getTime() / 1000), {
      headings: ["Days", "Hours", "Minutes", "Seconds"]
    }).start();
  }, [endDate]);

  return (
    <div
      id="flipdown"
      className="flipdown"
      style={{ margin: "0 auto", padding: "2rem 0" }}
    ></div>
  );
};

export default FlipCountdown;
