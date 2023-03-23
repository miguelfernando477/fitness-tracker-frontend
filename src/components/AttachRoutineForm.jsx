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
        <div className="formContainer">
            <form className="defaultForm" onSubmit={(e) => {
                e.preventDefault();
                attachActivity();
            }}>
                <h1 className="pageTitle" id="addActivityTitle">Add Activity to</h1>
                <h1 className="pageTitle" id="addActivityTitle2">{location.state.name}:</h1>
                <label className="formLabel">Activities
                <select className="inputtext" name="Activities" id="activities" defaultValue="selectactivity" onChange={(event) => {
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
                <label className="formLabel">Count:<input className="inputtext" type="number"  value={count} name="routineName" onChange={(event)=>{
                    setCount(event.target.value)
                }}></input></label>
                <label className="formLabel">Duration:<input className="inputtext" type="number" value={duration} name="routineGoal" onChange={(event)=>{
                    setDuration(event.target.value)
                }}></input></label>
                <button className="redButton">Submit</button>
            </form>
        </div>
    )
}

export default AttachRoutineForm