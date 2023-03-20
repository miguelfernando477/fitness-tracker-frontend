import React, { useState, useEffect } from "react"
import { getAllActivities } from "../apiAdapters";

const Activities = () => {
    const [activities, setActivities] = useState([]);
    
    async function getActivities() {
        try {
            const result = await getAllActivities();
            setActivities(result)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getActivities();
    }, [])
    
        return (
            <div>
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