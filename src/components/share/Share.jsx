import "./share.css";
import { PermMedia } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/images-2.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input placeholder="Quoi de neuf ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Photo ou vidéo</span>
            </div>
          </div>
          <button className="shareButton">publier</button>
        </div>
      </div>
    </div>
  );
}
