import "../styles/Profile.css";
import Sidebar from "../components/Sidebar";
function Profile() {
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-header">
        <div className="profile-picture"></div>

        <div className="profile-info">
          <h2>Aakash Tripathi</h2>

          <p>@manWithHeadche</p>
          <div className="profile-stats">
            <div className="stat">
              <h3>0</h3>
              <p>Posts</p>
            </div>

            <div className="stat">
              <h3>0</h3>
              <p>Followers</p>
            </div>

            <div className="stat">
              <h3>0</h3>
              <p>Following</p>
            </div>
          </div>

          <p>To be me or nothing at all</p>
          <div className="btns">
            <button className="profile-btn">Edit Profile</button>

            <button className="profile-btn">View Archive</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
