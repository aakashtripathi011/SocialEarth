import "../styles/Login.css";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
function Login() {
  return (
    <div className="container">
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

        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>

          <button type="submit">Login</button>

          <div className="alternate">
            <div className="forget-password">
              <a href="#">forgot password?</a>
            </div>

            <div className="create-account">
              <p>Don't have an account?</p>
              <a href="register.html">Create Account</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
