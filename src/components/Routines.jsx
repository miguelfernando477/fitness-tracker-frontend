import React, {useEffect, useState} from "react"
import { getAllRoutines } from "../apiAdapters"


const Routines = () => {
const [routines, setRoutines] = useState([]);

async function getRoutines() {
    try {
        const result = await getAllRoutines();
        setRoutines(result)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getRoutines();
}, [])

    return (
        <div id="routines" className="pageContainer">
            <h1 className="pageTitle">Routines</h1>
            <div id="routineList">
                {routines.map((routine, idx) => {
                return (
                    <div key={'routine idx:' + idx} id="routineCard"> 
                        <h1>Routine:{routine.name}</h1>
                        <h2>Goal: {routine.goal}</h2>
                        <h2>{routine.creatorId}</h2>
                    
                        {routine.activities.map((activity, idx) => {
                            return (
                                <div key={'activity idx' + idx}>
                                    <h2>Activity:{activity.name}</h2>
                                    <h3>Description: {activity.description} </h3>
                                    {activity.count && <h4>Count:{activity.count}</h4>}
                                    {activity.duration && <h4>Duration:{activity.duration}</h4>}
                                </div>
                            )
                        })}

                        <h2>Creator: {routine.creatorName}</h2>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Routines