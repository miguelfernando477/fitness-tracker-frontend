import React from "react";
import { Link } from "react-router-dom";

const logOut = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("username")
}

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="navLink">Home</Link>
      <Link to="/routines" className="navLink">Routines</Link>
      <Link to="/myroutines" className="navLink">My Routines</Link>
      <Link to="/activities" className="navLink">Activities</Link>
      {localStorage.getItem("username") ? ( <button onClick={() => {
        logOut();
      }}>Log Out</button> ) :  <Link to="/loginregister" className="navLink">Login/Register</Link> }
     
    </div>
  );
};

export default Navbar;