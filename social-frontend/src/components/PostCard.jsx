import "../styles/PostCard.css";
import { Heart, MessageCircle, Send } from "react-feather";

function PostCard() {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <h1>UserName</h1>
        <button className="alter-post">...</button>
      </div>
      <div className="bottom">
        <button className="like-btn">
          <Heart color="white" size={23} strokeWidth={1.5} />
        </button>
        <button className="comment-btn">
          <MessageCircle color="white" size={23} strokeWidth={1.5} />
        </button>
        <button className="share-btn">
          <Send color="white" size={21} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
