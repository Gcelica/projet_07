import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/event/event-1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/images-1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Celica</h4>
              <span className="profileInfoDesc">Salut c'est moi !</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}
