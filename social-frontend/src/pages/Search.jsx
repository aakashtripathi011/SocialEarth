import Sidebar from "../components/Sidebar";
import "../styles/Search.css";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

const exploreImages = [
  "https://picsum.photos/500?random=1",
  "https://picsum.photos/500?random=2",
  "https://picsum.photos/500?random=3",
  "https://picsum.photos/500?random=4",
  "https://picsum.photos/500?random=5",
  "https://picsum.photos/500?random=6",
  "https://picsum.photos/500?random=7",
  "https://picsum.photos/500?random=8",
  "https://picsum.photos/500?random=9",
  "https://picsum.photos/500?random=10",
  "https://picsum.photos/500?random=11",
  "https://picsum.photos/500?random=12",
];

function Search() {
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
const navigate = useNavigate();
useEffect(() => {
  if (query === "") {
    setResults([]);
    return;
  }
   console.log("Searching:", query);

  const fetchUsers = async () => {
    const response = await fetch(
      `http://localhost:3000/search?q=${query}`
    );

    const data = await response.json();

      console.log(data);

    if (data.success) {
      setResults(data.users);
    }
  };

  fetchUsers();
}, [query]);
  return (
    <div className="search-page">
      <Sidebar />

      <main className="search-main">
        <h1>Search</h1>

        <div className="search-box">
         
         <input
  type="text"
  placeholder="Search users..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
        </div>

       {query === "" ? (
  <div className="explore-grid">
    {exploreImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt="Explore"
        className="explore-post"
      />
    ))}
  </div>
) : (
  <div className="search-results">
    {results.map((user) => (
      <div className="user-card" key={user._id}
       onClick={() => navigate(`/profile/${user.email}`)}>
        <h3>{user.name}</h3>
        <p>@{user.username}</p>
      </div>
    ))}
  </div>
)}
      </main>
    </div>
  );
}

export default Search;
