import React, { useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editRoutine } from "../apiAdapters";

function EditRoutine() {
    const location = useLocation();
    const navigate = useNavigate();
    let [newName, setNewName] = useState(location.state.name);
    let [newGoal, setNewGoal] = useState(
      location.state.goal
    );
    let [newIsPublic, setNewIsPublic] = useState(
      location.state.isPublic
    );
  
    async function changeRoutine(
      id,
      name,
      goal,
      isPublic
    ) {
      try {
        const result = await editRoutine(
          id,
          name,
          goal,
          isPublic
        );
        setNewName("");
        setNewGoal("");
        setNewIsPublic(false);
        navigate("/myroutines")
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
      <div >
        <h1 >Edit Routine</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            changeRoutine(
              location.state.id,
              newName,
              newGoal,
              newIsPublic
            );
          }}
        >
          <h1>Name</h1>
          <input
            name="name"
            type="text"
            required
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
          <h1>Goal</h1>
          <input
            name="goal"
            type="text"
            required
            value={newGoal}
            onChange={(event) => {
              setNewGoal(event.target.value);
            }}
          />
          <h1>
           Public
            <input
              name="isPublic"
              type="checkbox"
              value={newIsPublic}
              checked={newIsPublic}
              onChange={() => {
                setNewIsPublic(!newIsPublic);
              }}
            />
          </h1>
  
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default EditRoutine;