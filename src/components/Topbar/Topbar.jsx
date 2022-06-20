import "./topbar.css";
import { Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Groupomania</span>
      </div>

      <div className="topbarRight">
        <nav>
          <Link className="topbarLink" to="/">
            Accueil
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
        <img src="/assets/person/images-1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
