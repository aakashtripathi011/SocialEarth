import Sidebar from "../components/Sidebar";
import "../styles/Search.css";
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
  return (
    <div className="search-page">
      <Sidebar />

      <main className="search-main">
        <h1>Search</h1>

        <div className="search-box">
          <input type="text" placeholder="Search users..." />
        </div>

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
      </main>
    </div>
  );
}

export default Search;
