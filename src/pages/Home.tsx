import { useEffect } from "react";
import { useState } from "react";
import Feed from "./Feed";
import Hero from "./Hero";

const Home = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return <div>{user ? <Feed /> : <Hero />}</div>;
};

export default Home;
