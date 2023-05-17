import { useEffect, useState } from "react";
import "./Feed.css";

const Feed = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("name");
    const id = localStorage.getItem("ID");
    if (user && id) {
      setName(JSON.parse(user));
      setId(JSON.parse(id));
    }
  }, []);
  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <div>
      <h1>Feed</h1>
      <h3>Hello, {name}</h3>

      <p>We assigned {id} for you!</p>
      <button onClick={handleSignOut}>Signout</button>
    </div>
  );
};

export default Feed;
