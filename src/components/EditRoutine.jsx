import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editRoutine } from "../apiAdapters";

function EditRoutine() {
  const location = useLocation();
  const navigate = useNavigate();
  let [newName, setNewName] = useState(location.state.name);
  let [newGoal, setNewGoal] = useState(location.state.goal);
  let [newIsPublic, setNewIsPublic] = useState(location.state.isPublic);
  async function changeRoutine(id, name, goal, isPublic) {
    try {
      await editRoutine(id, name, goal, isPublic);
      setNewName("");
      setNewGoal("");
      setNewIsPublic(false);
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
          changeRoutine(location.state.id, newName, newGoal, newIsPublic);
        }}
      >
        <label className="formLabel">
          Name:
          <input
            className="inputtext"
            name="name"
            type="text"
            required
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </label>
        <label className="formLabel">
          Goal:
          <input
            className="inputtext"
            name="goal"
            type="text"
            required
            value={newGoal}
            onChange={(event) => {
              setNewGoal(event.target.value);
            }}
          />
        </label>
        <label id="checkboxLabel">
          Public:
          <input
            className="inputtext"
            name="isPublic"
            type="checkbox"
            value={newIsPublic}
            checked={newIsPublic}
            onChange={() => {
              setNewIsPublic(!newIsPublic);
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

export default EditRoutine;
