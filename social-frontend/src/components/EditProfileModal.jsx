import "../styles/EditProfileModal.css";
import { useState } from "react";
function EditProfileModal({ setShowModal }) {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const handleSave = async () => {
    const response = await fetch("http://localhost:3000/update-profile", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name,
        username,
        bio,
        profileImage,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      alert("Profile Updated!");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          ✕
        </button>
        <h2>Edit Profile</h2>

        <div className="modal-content">
          <div className="left-section">
            <div className="profile-preview">
              {profileImage ? (
                <img src={profileImage} alt="Profile Preview" />
              ) : (
                <span>👤</span>
              )}
            </div>

            <button
              className="change-photo-btn"
              onClick={() => document.getElementById("profile-upload").click()}
            >
              Change Photo
            </button>

            <input
              type="file"
              accept="image/*"
              id="profile-upload"
              hidden
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setProfileImage(URL.createObjectURL(file));
                }
              }}
            />
          </div>

          <div className="right-section">
            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Bio</label>
              <textarea
                placeholder="Tell everyone about yourself..."
                rows="5"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
            </div>

            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal;
