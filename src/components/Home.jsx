import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Home = (props) => {
    const [username, setUsername] = useState("");

    const loggedInUser = props.loggedInUser;

    useEffect(() => {
        setUsername(localStorage.getItem("username"));
    }, [])

    return (
        <div>
            {username ? <h1>Welcome to Fitness Tracker, {username}</h1> : <h1>Welcome to Fitness Tracker</h1>}
            <Link to="/routines" className="navLink">Routines</Link>
            {loggedInUser && <Link to="/myroutines" className="navLink">My Routines</Link>}
            <Link to="/activities" className="navLink">Activities</Link>
            {!localStorage.getItem("username") && <Link to="/loginregister" className="navLink">Login/Register</Link> }
        </div>
    )
}

export default Home