import "./post.css";
import { MoreVert, ThumbUp } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">celica</span>
            <span className="postDate">5 mins</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">First Post</span>
          <img className="postImg" src="assets/person/images-2.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div htmlColor="red" className="likeIcon">
              <ThumbUp htmlColor="blue" />
            </div>

            <span className="postLikeCounter"> 1 j'aime !</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 3 commentaires </span>
          </div>
        </div>
      </div>
    </div>
  );
}
