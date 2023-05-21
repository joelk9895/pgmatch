import { useEffect, useState, useContext } from "react";
import "./Feed.css";
import { getAuth, signOut } from "firebase/auth";
import Feedcard from "../component/Feedcard";
import gsap from "gsap";
import { AuthContext } from "../Authcheck";
import { ScrollTrigger } from "gsap/all";
import { app } from "../Firebase";
gsap.registerPlugin(ScrollTrigger);
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase";
import { useNavigate } from "react-router";

const Feed = () => {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [name, setName] = useState<string | null>(null);
  const auth = getAuth(app);
  useEffect(() => {
    if (user) {
      setName(user.displayName);
    }
  }, [user, user?.displayName]);

  const handleSignOut = () => {
    signOut(auth);
  };
  const [feedData, setFeedData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Firestore when the component mounts
    const fetchData = async () => {
      const q = query(collection(db, "pgs"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setFeedData(data);
    };

    fetchData();
  }, []);
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

  const handleadd = () => {
    Navigate("/add");
  };

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
          <button className="link-dash" onClick={handleadd}>
            Add PG
          </button>
        </div>
        <div className="user">
          <img src="" alt="Hello" />

          <button className="signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <hr />
      <div className="feed-cont-hold">
        <h2>
          Hi, {name} <br /> we have made a curated list of PGs for you
        </h2>
        <div className="feed-cont">
          {feedData.map((data, index) => (
            <Feedcard
              key={index}
              pg_name={data.pg_name}
              price={data.price}
              location={data.location}
              rating={4.5} // Add the appropriate rating value
              amenities={data.facilities}
              photo={data.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
