import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar,Home, Routines, MyRoutines, Activities, LoginRegister, EditRoutine, AttachRoutineForm, EditRoutineActivity } from "./";


const Main = () => {


    //State declaration
    const [loggedInUser, setLoggedInUser] = useState("");

    return(
        <div id="main">
            <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            <div>
                <Routes>
                    <Route exact path="/" element={<Home loggedInUser={loggedInUser}/>}/>
                    <Route path="/routines" element={<Routines/>}/>
                    <Route path="/myroutines" element={<MyRoutines/>}/>
                    <Route path="/activities" element={<Activities/>}/>
                    <Route path="/loginregister" element={<LoginRegister setLoggedInUser={setLoggedInUser}/>}/>
                    <Route path="/myroutines/edit-routine/:id" element={< EditRoutine/>}/>
                    <Route path="/myroutines/attach-activity-to-routine/:id" element={< AttachRoutineForm/>}/>
                    <Route path="/myroutines/edit-routine-activity/:id" element={< EditRoutineActivity/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main