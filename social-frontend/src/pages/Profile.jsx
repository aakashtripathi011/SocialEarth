import "../styles/Profile.css";
import EditProfileModal from "../components/EditProfileModal";
import Sidebar from "../components/Sidebar";

import { useState } from "react";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-header">
        <div className="profile-picture"></div>

        <div className="profile-info">
          <h2>Aakash Tripathi 🍁</h2>

          <p>@MANWITHHEADACHE</p>
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

          <p>
            To be me or nothing at all <br />
            TO BE OR NOT TO BE
          </p>
          <div className="btns">
            <button className="profile-btn" onClick={() => setShowModal(true)}>
              Edit Profile
            </button>

            <button className="profile-btn">View Archive</button>
          </div>
        </div>
      </div>
      <div className="profile-tabs">
        <div className="tab active">Posts</div>
        <div className="tab">Saved</div>
        <div className="tab">Repost</div>
        <div className="tab">Tag</div>
      </div>
      {showModal && <EditProfileModal setShowModal={setShowModal} />}
    </div>
  );
}
export default Profile;
