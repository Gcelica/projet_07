import axios from "axios";
import React, { useEffect } from "react";
//import { Link } from "react-router-dom";

import "./post.css";
import { MoreVert, ThumbUp } from "@mui/icons-material";

const Post = () => {
  //useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => console.log(res));
  }, []);

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
            <div className="likeIcon">
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
};

export default Post;
