import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <h1>SocialEarth</h1>
      <button className="sidebar-btn">🏠 Home</button>
      <button className="sidebar-btn">🔍 Search</button>
      <button className="sidebar-btn">➕ Create</button>
      <button className="sidebar-btn">🤍 Notifications</button>
      <button className="sidebar-btn">💬 Messages</button>

      <Link to="/profile">
        <button className="sidebar-btn">👤 Profile</button>
      </Link>

      <button className="sidebar-btn">⚙ Settings</button>
      <button className="sidebar-btn"> ☰ More</button>
    </div>
  );
}
export default Sidebar;
