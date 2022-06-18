import "./rightbar.css";
import { Event } from "@mui/icons-material";

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="eventContainer">
          <Event className="eventIcon" />
          <span className="eventText">
            Conférence sur le bien être au tavail
          </span>
        </div>
      </div>
    </div>
  );
}
