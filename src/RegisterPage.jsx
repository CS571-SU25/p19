import React from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <main className="register-container">
      <div className="register-card">
        <h2>Register for the Run</h2>
        <form>
          <label>
            First Name*
            <input type="text" name="firstName" required />
          </label>

          <label>
            Last Name*
            <input type="text" name="lastName" required />
          </label>

          <label>
            Email Address*
            <input type="email" name="email" required />
          </label>

          <label>
            Race Type
            <select name="raceType">
              <option>5K</option>
              <option>10K</option>
              <option>Half Marathon</option>
            </select>
          </label>

          <label>
            Shirt Size
            <select name="shirtSize">
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </label>

          <label>
            Donation Amount (optional)
            <input type="number" name="donation" />
          </label>

          <button type="submit">Submit Registration</button>
          
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
