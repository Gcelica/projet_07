import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
//import { useEffect, useState } from "react";
//import axios from "axios";
import { useParams } from "react-router";

function Profile() {
  /* const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //const [user, setUser] = useState({});
  const username = useParams().username;

  //faire requete axios pour modifier le profile

  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName" id="profileUsername">
                {user.username}
              </h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
          </div>
        </div>
      </div>
    </>
  );*/
}

export default Profile;
