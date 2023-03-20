import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar,Home, Routines, MyRoutines, Activities, LoginRegister, EditRoutine } from "./";


const Main = () => {


    //State declaration




    return(
        <div id="main">
            <Navbar />
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/routines" element={<Routines/>}/>
                    <Route path="/myroutines" element={<MyRoutines/>}/>
                    <Route path="/activities" element={<Activities/>}/>
                    <Route path="/loginregister" element={<LoginRegister/>}/>
                    <Route path="/myroutines/edit-routine/:id" element={< EditRoutine/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Main