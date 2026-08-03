import "../styles/Profile.css";
import EditProfileModal from "../components/EditProfileModal";
import Sidebar from "../components/Sidebar";

import { useEffect, useState } from "react";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    console.log(localStorage.getItem("email"));

    const url = `http://localhost:3000/profile?email=${localStorage.getItem("email")}`;

    console.log(url);

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setUser(data.user);
      console.log(data.user);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(user);

  return (
    <div className="profile-container">
      <Sidebar />
      <div className="profile-header">
        <div className="profile-picture"></div>

        <div className="profile-info">
          <h2>{user?.name}</h2>

          <p>@{user?.username}</p>
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

          <p>{user?.bio}</p>
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
