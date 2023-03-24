import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const loggedInUser = props.loggedInUser;
  const setLoggedInUser = props.setLoggedInUser;

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLoggedInUser("");
  };

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("username"));
  }, []);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("username"));
  }, [loggedInUser]);

  return (
    <div id="navbar">
      <h1 id="Title">Fitness Tracker</h1>
      <div id="navbarLinks">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/routines" className="navLink">
          Routines
        </Link>
        {loggedInUser && (
          <Link to="/myroutines" className="navLink">
            My Routines
          </Link>
        )}
        <Link to="/activities" className="navLink">
          Activities
        </Link>
        {localStorage.getItem("username") ? (
          <button
            id="logOutButton"
            onClick={() => {
              logOut();
              navigate("/loginregister");
            }}
          >
            Log Out
          </button>
        ) : (
          <Link to="/loginregister" className="navLink">
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
