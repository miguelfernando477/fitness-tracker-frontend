import React, { useEffect, useState } from "react";
import { getAllRoutines } from "../apiAdapters";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  async function getRoutines() {
    try {
      const result = await getAllRoutines();
      setRoutines(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRoutines();
  }, []);

  return (
    <div id="routines" className="pageContainer">
      <h1 className="pageTitle">Routines</h1>
      <div>
        {routines.map((routine, idx) => {
          return (
            <div key={"routine idx:" + idx} id="card">
              <h1>
                <span id="cardLabel">Routine: </span>
                {routine.name}
              </h1>
              <h2>
                <span id="cardLabel">Goal: </span>
                {routine.goal}
              </h2>

              {routine.activities.map((activity, idx) => {
                return (
                  <div key={"activity idx" + idx}>
                    <h2>
                      <span id="cardLabel">Activity: </span>
                      {activity.name}
                    </h2>
                    <h3>Description: {activity.description} </h3>
                    {activity.count && <h4>Count: {activity.count}</h4>}
                    {activity.duration && (
                      <h4>Duration: {activity.duration}</h4>
                    )}
                  </div>
                );
              })}

              <h2>
                <span id="cardLabel">Creator: </span>
                {routine.creatorName}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Routines;
