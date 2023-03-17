import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar,Home, Routines, MyRoutines, Activities, LoginRegister } from "./";


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
                </Routes>
            </div>
        </div>
    )
}

export default Main