import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
