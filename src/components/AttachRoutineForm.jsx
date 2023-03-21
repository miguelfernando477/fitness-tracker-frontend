import React, { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom";
import { attachActivityToRoutine, getAllActivities } from "../apiAdapters";

const AttachRoutineForm = () => {
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activity, setActivity] = useState("");
    const [activities, setActivities] = useState([]);
    const [currentRoutineId, setCurrentRoutineId] = useState(0);

    async function attachActivity() {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    async function getRoutine() {
        try {
            const { routineId } = useParams();
            setCurrentRoutineId(routineId);
            
        } catch (error) {
            console.log(error);
        }
    }

    async function getActivities() {
        try {
            const result = await getAllActivities();
            setActivities(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRoutine();
        getActivities();
    }, [])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                createRoutine();
            }}>
                <h3>New Routine:</h3>
                <label className="formLabel">Name:<input type="text" value={routineName} name="routineName" onChange={(event)=>{
                    setRoutineName(event.target.value)
                }}></input></label>
                <label className="formLabel">Goal:<input type="text" value={routineGoal} name="routineGoal" onChange={(event)=>{
                    setRoutineGoal(event.target.value)
                }}></input></label>
                <label className="formLabel">Public:<input id="isPublicCheckbox" type="checkbox" value={isPublic} name="isPublic" onChange={(event)=>{
                    setIsPublic(!isPublic)
                }}></input></label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AttachRoutineForm