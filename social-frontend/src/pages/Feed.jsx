import "../styles/Feed.css";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import PostCard from "../components/PostCard";

function Feed() {
  return (
    <div className="feed-container">
      <Sidebar />

      <div className="main-content">
        <Stories />

        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default Feed;
