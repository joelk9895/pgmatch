import { useEffect, useState, useContext } from "react";
import "./Feed.css";
import { getAuth, signOut } from "firebase/auth";
import Feedcard from "../component/Feedcard";
import gsap from "gsap";
import { AuthContext } from "../Authcheck";
import { ScrollTrigger } from "gsap/all";
import { app } from "../Firebase";
gsap.registerPlugin(ScrollTrigger);

const Feed = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState();
  const auth = getAuth(app);
  useEffect(() => {
    if (user) {
      setName(user.displayName);
      setProfile(user.photoURL);
    }
  }, [user]);
  const handleSignOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    gsap.fromTo(
      ".feed-cont-hold h2",

      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".feed-cont-hold h2",
          start: "top 15%",
          end: "bottom 5%",
          scrub: 2,
        },
      }
    );
  }, []);
  return (
    <div id="feed">
      <div className="filler"></div>
      <div className="nav-feed">
        <div className="bottomfilter"></div>
        <h1>
          <span>PG</span>Match
        </h1>
        <div className="routing-links">
          <button className="link-dash">Home</button>
          <button className="link-dash">Dashboard</button>
        </div>
        <div className="user">
          <img src={profile} alt="Hello" />

          <button className="signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <hr />
      <div className="feed-cont-hold">
        <h2>
          Hi, {name} <br /> this is the curated listing for you
        </h2>
        <div className="feed-cont">
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
          <Feedcard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
