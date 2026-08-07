import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Sidebar() {
  const fileInputRef = useRef(null);

  return (
    <div className="sidebar">
      <h1>SocialEarth</h1>

      <Link to="/">
        <button className="sidebar-btn">🏠 Home</button>
      </Link>

      <Link to="/Search">
        <button className="sidebar-btn">🔍 Search</button>
      </Link>

      <button
        className="sidebar-btn"
        onClick={() => fileInputRef.current.click()}
      >
        ➕ Create
      </button>

      <button className="sidebar-btn">🤍 Notifications</button>

      <button className="sidebar-btn">💬 Messages</button>

      <Link to={`/profile/${localStorage.getItem("email")}`}>
        <button className="sidebar-btn">👤 Profile</button>
      </Link>

      <button className="sidebar-btn">⚙ Settings</button>

      <button className="sidebar-btn">☰ More</button>

      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
    </div>
  );
}

export default Sidebar;
