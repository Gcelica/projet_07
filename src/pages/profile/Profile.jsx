import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";

function Profile() {
  let searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has("id")) {
    var userId = searchParams.get("id");
    console.log(userId);
  } else {
    window.location.pathname = "/profile";
  }

  fetch("http://localhost:5500/api/users/profile" + userId)
    .then((response) => response.json())
    .then((userProfile) => {
      console.log(userProfile);
    });

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
              <h4 className="profileInfoName" id="profileUsername">
                Celica
              </h4>
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

export default Profile;
