import React, { useState } from "react"
import { registerNewUser, logUserIn } from "../apiAdapters"

const LoginRegister = () => {
    const [displayLogin, setDisplayLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            {displayLogin  
            ? <div>
            <form id="loginForm" onSubmit={(e) => {
                e.preventDefault();
                logUserIn(username, password);
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
                registerNewUser(username, password);
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