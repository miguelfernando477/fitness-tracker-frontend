import React, { useState } from "react"
import { registerNewUser, logUserIn } from "../apiAdapters"

const LoginRegister = () => {
    const [displayLogin, setDisplayLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            {displayLogin  
            ? <form id="loginForm">
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
                <button className="loginRegisterButton" onSubmit={() => {
                    setDisplayLogin(false);
                }}
                >Don't have an account? Sign up here</button>
            </form> 
            : <form id="registerForm">
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
                <button className="loginRegisterButton" onSubmit={() => {
                    setDisplayLogin(true);
                }}
                >Already have an account? Log in here</button>
            </form>}
        </div>
    )
}

export default LoginRegister