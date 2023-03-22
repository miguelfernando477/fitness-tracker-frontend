import React, { useState, useEffect } from "react"
import { getMyRoutines, createNewRoutine, deleteRoutine, deleteRoutineActivity } from "../apiAdapters";
import { Link } from "react-router-dom"

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

    async function deleteRoutineFromMyRoutines(id) {
        try {
            await deleteRoutine(id);
            getRoutines();
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteActivityFromRoutine(id) {
        try {
            await deleteRoutineActivity(id);
            getRoutines();
        } catch (error) {
            console.log(error)
        }
    }

    async function createRoutine() {
        try {
            await createNewRoutine(routineName, routineGoal, isPublic);
            getRoutines();
            setRoutineName("");
            setRoutineGoal("");
            setIsPublic(false);
            document.getElementById("isPublicCheckbox").checked = false;
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getRoutines();
    }, [])

    return (
        <div id="myRoutines">
            <h1 className="pageTitle">My Routines</h1>
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
            <div>
                {routines.map((routine, idx) => {
                    return (
                        <div key={'routine idx:' + idx}> 
                            <h1>Routine:{routine.name}</h1>
                            <h2>Goal: {routine.goal}</h2>
                        
                            {routine.activities.map((activity, idx) => {
                                return (
                                    <div key={'activity idx' + idx}>
                                        <h2>Activity:{activity.name}</h2>
                                        <h3>Description: {activity.description} </h3>
                                        {activity.count && <h4>Count:{activity.count}</h4>}
                                        {activity.duration && <h4>Duration:{activity.duration}</h4>}
                                        <Link to={`edit-routine-activity/${activity.routineActivityId}`} state={activity}>
                                            
                                <button>Edit Count/Duration</button>
                            </Link>
                            <button onClick={() => deleteActivityFromRoutine(activity.routineActivityId) } >Delete Activity</button>
                                    </div>
                                )
                            })}
                            {routine.isPublic ? <h2>Public</h2>: <h2>Private</h2>}
                            <Link to={`edit-routine/${routine.id}`} state={routine}>
                                <button>Edit Routine</button>
                            </Link>
                            <Link to={`attach-activity-to-routine/${routine.id}`} state={routine}>
                                <button>Add Activity</button>
                            </Link>
                            <button onClick={() => deleteRoutineFromMyRoutines(routine.id) } >Delete Routine</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyRoutines