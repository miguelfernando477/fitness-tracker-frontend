import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editRoutineActivity } from "../apiAdapters";

function EditRoutineActivity() {
  const location = useLocation();
  const navigate = useNavigate();
  let [newCount, setNewCount] = useState(location.state.count);
  let [newDuration, setNewDuration] = useState(location.state.duration);
  async function changeRoutineActivity(id, count, duration) {
    try {
      await editRoutineActivity(id, count, duration);
      setNewCount("");
      setNewDuration("");
      navigate("/myroutines");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="formContainer">
      <h1 className="pageTitle">Edit {location.state.name}</h1>
      <form
        className="defaultForm"
        onSubmit={(event) => {
          event.preventDefault();
          changeRoutineActivity(
            location.state.routineActivityId,
            newCount,
            newDuration
          );
        }}
      >
        <label className="formLabel">
          Count:
          <input
            className="inputtext"
            name="count"
            type="number"
            required
            value={newCount}
            onChange={(event) => {
              setNewCount(event.target.value);
            }}
          />
        </label>

        <label className="formLabel">
          Duration:
          <input
            className="inputtext"
            name="duration"
            type="number"
            required
            value={newDuration}
            onChange={(event) => {
              setNewDuration(event.target.value);
            }}
          />
        </label>
        <button className="redButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditRoutineActivity;
