import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      navigate("/feed");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="image-section">
          <img src={img1} className="img1" alt="" />
          <img src={img2} className="img2" alt="" />
          <img src={img3} className="img3" alt="" />
        </div>
      </div>

      <div className="right-panel">
        <div className="logo-section">
          <h1>socialEarth</h1>
          <p>Connect. Jam. Create.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button id="loginbtn" type="submit">
            Login
          </button>

          <div className="alternate">
            <div className="forget-password">
              <a href="#">forgot password?</a>
            </div>

            <div className="create-account">
              <p>Don't have an account?</p>
              <Link to="/register">Create Account</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
