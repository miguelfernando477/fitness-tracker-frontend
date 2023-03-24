import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [username, setUsername] = useState("");

  const loggedInUser = props.loggedInUser;

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, []);

  return (
    <div id="home">
      <h1 id="welcome">
        Welcome to <span id="homeTitle">Fitness Tracker</span>
      </h1>
      {username ? <h1 id="User">{username}</h1> : null}
      {loggedInUser && (
        <Link to="/myroutines" className="homeLink">
          My Routines
        </Link>
      )}
      <Link to="/routines" className="homeLink">
        Routines
      </Link>
      <Link to="/activities" className="homeLink">
        Activities
      </Link>
      {!localStorage.getItem("username") && (
        <Link to="/loginregister" className="homeLink">
          Login/Register
        </Link>
      )}
    </div>
  );
};

export default Home;
