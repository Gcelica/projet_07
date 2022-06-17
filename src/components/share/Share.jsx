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
            <div className="sharOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo ou vidéo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
