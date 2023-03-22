import React, { useState } from "react"
import { registerNewUser, logUserIn } from "../apiAdapters"
import { useNavigate } from "react-router-dom";


const LoginRegister = () => {
    const navigate = useNavigate()
    const [displayLogin, setDisplayLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

async function registerUser() {
    try {
        const response = await registerNewUser(username, password);
        if (response.name === "UserAlreadyExist") {
            alert("User already exist");
        }
        else {
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", username);
            navigate("/")
        }
    } catch (error) {
        console.log(error)
    }
}

async function loginUser() {
    try {
        const response = await logUserIn(username, password);
        if (response.error) {
            alert("Invalid Login Credentials");
        }
        else {
            localStorage.setItem("token", response.token);
            localStorage.setItem("username", username);
            navigate("/")
        }
    } catch (error) {
        console.log(error)
    }
}



    return (
        <div>
            {displayLogin  
            ? <div>
            <form id="loginForm" onSubmit={(e) => {
                e.preventDefault();
               loginUser();
            }}> 
                <h1>Log In</h1>
                <label className="formLabel">
                    Username: 
                    <input type="text" value={username} name="username" onChange={(event)=>{

                        setUsername(event.target.value)

                    }}></input>
                </label>
                <label className="formLabel">
                    Password:  
                    <input type="text" value={password} name="password" onChange={(event)=>{

                        setPassword(event.target.value)

                    }}></input>
                </label>
                <button type="submit">Log In</button>
            </form> 
                <button type="button" className="loginRegisterButton" onClick={() => { 
                    setDisplayLogin(false);
                }}
                >Don't have an account? Sign up here</button>
            
            </div>
            : <div>
            <form id="registerForm" onSubmit={(e) => {
                e.preventDefault();
               registerUser();
            }} > <h1>Register</h1>
                <label className="formLabel">
                    Username: 
                    <input type="text" value={username} name="username" onChange={(event)=>{

                        setUsername(event.target.value)

                    }}></input>
                </label>
                <label className="formLabel">
                    Password:  
                    <input type="text" value={password} name="password" onChange={(event)=>{

                        setPassword(event.target.value)

                    }}></input>
                </label>
                <button type="submit">Register</button>
            </form>
                <button type="button" className="loginRegisterButton" onClick={() => {
                    setDisplayLogin(true);
                }}
                >Already have an account? Log in here</button>
            </div>
            }
        </div>
    )
}

export default LoginRegister