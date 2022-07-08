import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

import "./home.css";

function Home() {
  let searchParams = new URLSearchParams(window.location.search);

  if (searchParams.has("id")) {
    var userId = searchParams.get("id");
    console.log(userId);
  } else {
    window.location.pathname = "/";
  }

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default Home;
