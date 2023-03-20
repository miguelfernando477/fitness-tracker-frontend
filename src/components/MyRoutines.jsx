import React, { useState, useEffect } from "react"
import { getMyRoutines, createNewRoutine } from "../apiAdapters";

const MyRoutines = () => {
    const [routines, setRoutines] = useState([]);
    const [routineName, setRoutineName] = useState("");
    const [routineGoal, setRoutineGoal] = useState("");
    const [isPublic, setIsPublic] = useState(false);

    async function getRoutines() {
        try {
            const result = await getMyRoutines();
            setRoutines(result)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getRoutines();
    }, [])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                createNewRoutine(routineName, routineGoal, isPublic);
            }}>
                <h3>New Routine:</h3>
                <label className="formLabel">Name:<input type="text" value={routineName} name="routineName" onChange={(event)=>{
                    setRoutineName(event.target.value)
                }}></input></label>
                <label className="formLabel">Goal:<input type="text" value={routineGoal} name="routineGoal" onChange={(event)=>{
                    setRoutineGoal(event.target.value)
                }}></input></label>
                <label className="formLabel">Public:<input type="checkbox" value={isPublic} name="isPublic" onChange={(event)=>{
                    setIsPublic(!isPublic)
                }}></input></label>
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default MyRoutines