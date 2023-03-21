let BASE_URL = "https://fitness-tracker-server-b2s9.onrender.com/api";

export const registerNewUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logUserIn = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRoutines = async () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createNewRoutine = async (name, goal, isPublic) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
    const result = await response.json();
    console.log(response, "newRoutine");
    return result;
  } catch (error) {
    console.log(error);
  }
};
//Duplicate Name Issue

export const editRoutine = async (id, name, goal, isPublic) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoutine = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/routines/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createNewActivity = async (name, description) => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
    const result = await response.json();
    console.log(response, "newActivity");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const attachActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityId: activityId,
          count: count,
          duration: duration,
        }),
      }
    );
    const result = await response.json();
    console.log(response, "attachedActivity");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const editRoutineActivity = async (id, count, duration) => {
  const token = localStorage.getItem("token");
  console.log("editRoutineActivity");
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        count: count,
        duration: duration,
      }),
    });
    const result = await response.json();
    console.log(response, "routineActivity");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoutineActivity = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
