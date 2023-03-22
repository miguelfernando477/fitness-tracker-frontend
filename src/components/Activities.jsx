import React, { useState, useEffect } from "react"
import { createNewActivity, getAllActivities } from "../apiAdapters";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [activityName, setActivityName] = useState("");
    const [activityDescription, setActivityDescription] = useState("");
    
    async function getActivities() {
        try {
            const result = await getAllActivities();
            setActivities(result)
        } catch (error) {
            console.log(error)
        }
    }

    async function createActivity() {
        try {
            const response = await createNewActivity(activityName, activityDescription);

            if (response.name === "ActivityAlreadyExist") {
                alert("Activity already exists");
            }
            else {
                await getActivities();
                setActivityName("");
                setActivityDescription("");
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getActivities();
    }, [])
    
        return (
            <div id="activities">
                <h1 className="pageTitle">Activities</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createActivity();
                }}>
                    <h3>New Activity:</h3>
                    <label className="formLabel">Name:<input type="text" value={activityName} name="activityName" onChange={(event)=>{
                        setActivityName(event.target.value)
                    }}></input></label>
                    <label className="formLabel">Description:<input type="text" value={activityDescription} name="activityDescription" onChange={(event)=>{
                        setActivityDescription(event.target.value)
                    }}></input></label>
                    <button>Submit</button>
                </form>
               {activities.map((activity, idx) => {
                return (
                    <div key={'activity idx:' + idx}> 
                        <h1>Name:{activity.name}</h1>
                        <h2>Description: {activity.description}</h2>
                        <h2>ID: {activity.id}</h2>

                    </div>
                )
               })}
            </div>
        )
    }

export default Activities