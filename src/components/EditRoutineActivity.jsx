import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editRoutineActivity } from "../apiAdapters";

function EditRoutineActivity() {
    const location = useLocation();
    const navigate = useNavigate();
    let [newCount, setNewCount] = useState(location.state.count);
    let [newDuration, setNewDuration] = useState(
      location.state.duration
    );
    async function changeRoutineActivity(
      id,
      count,
      duration
    ) {
      try {
        await editRoutineActivity(
          id,
          count,
          duration
        );
        setNewCount("");
        setNewDuration("");
        navigate("/myroutines")
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div >
        <h1 >Edit {location.state.name}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            changeRoutineActivity(
              location.state.routineActivityId,
              newCount,
              newDuration
            );
          }}
        >
          <h1>Count</h1>
          <input
            name="count"
            type="text"
            required
            value={newCount}
            onChange={(event) => {
              setNewCount(event.target.value);
            }}
          />
          <h1>Duration</h1>
          <input
            name="duration"
            type="text"
            required
            value={newDuration}
            onChange={(event) => {
              setNewDuration(event.target.value);
            }}
          />
  
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default EditRoutineActivity;