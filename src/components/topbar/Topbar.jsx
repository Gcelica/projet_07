import "./topbar.css";
import { Person, Chat, Notifications, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Topbar() {
  const logOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
  };

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
          <Link className="topbarLink" onClick={logOut} to="/login">
            <Logout />
          </Link>
        </nav>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person htmlColor="black" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat htmlColor="black" />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications htmlColor="black" />
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

export default Topbar;
