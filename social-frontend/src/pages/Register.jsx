import "../styles/Register.css";

import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="carousel">
          <img id="carousel-image" src={img1} />

          <h2 id="carousel-title">Connect</h2>

          <p id="carousel-text">Meet people from around the world.</p>

          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

          <div className="buttons">
            <button id="prev">❮</button>
            <button id="next">❯</button>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="logo-section">
          <h1>Create Account</h1>
          <p>Join SocialEarth</p>
        </div>

        <form id="register-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" id="create-btn">
            Create Account
          </button>

          <div className="create-account">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
