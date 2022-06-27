import "./topbar.css";
import { Person, Chat, Notifications, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link className="topbarLink" to="/">
          <img
            src="assets/logo/icon-left-font-monochrome-black.png"
            alt=""
            className="logo"
          />
        </Link>
      </div>

      <div className="topbarRight">
        <nav>
          <Link className="topbarLink" to="/login">
            <Logout />
          </Link>
        </nav>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <nav>
          <Link className="topbarLink" to="/profile">
            <img
              src="/assets/person/images-1.jpg"
              alt=""
              className="topbarImg"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}
