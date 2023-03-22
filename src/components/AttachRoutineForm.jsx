import React, { useEffect, useState } from "react"
import {  useLocation ,useNavigate } from "react-router-dom";
import { attachActivityToRoutine, getAllActivities } from "../apiAdapters";

const AttachRoutineForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activityId, setActivityId] = useState(0);
    const [activities, setActivities] = useState([]);


    async function attachActivity() {
        try {
            await attachActivityToRoutine(location.state.id, activityId, count, duration);
            setActivityId("");
            setCount(0);
            setDuration(0);
            navigate("/myroutines")
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
        getActivities();
    }, [])

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                attachActivity();
            }}>
                <h3>Add Activity to {location.state.name}:</h3>
                <label className="formLabel">Activities
                <select name="Activities" id="activities" defaultValue="selectactivity" onChange={(event) => {
                    setActivityId(event.target.value)
                }}>
                    <option value="selectactivity" hidden disabled>Select Activity</option>
                {activities.map((activity, idx) => {
                return (
                     <option value={activity.id} key={idx}>
                    {activity.name}
                    </option>
                )
               })}
                </select>
                </label>
                <label className="formLabel">Count:<input type="number"  value={count} name="routineName" onChange={(event)=>{
                    setCount(event.target.value)
                }}></input></label>
                <label className="formLabel">Duration:<input type="number" value={duration} name="routineGoal" onChange={(event)=>{
                    setDuration(event.target.value)
                }}></input></label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AttachRoutineForm