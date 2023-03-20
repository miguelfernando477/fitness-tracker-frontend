let BASE_URL = "https://fitness-tracker-server-b2s9.onrender.com/api";

export const registerNewUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username,
            password: password,
        }),
      });

      const result = await response.json();
      localStorage.setItem("token", result.token)
      localStorage.setItem("username", username);
      console.log(result)
    return result.token;
  } catch (error) {
    console.log(error);
  }
};

export const logUserIn = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          username: username,
          password: password,
      }),
    });
    const result = await response.json();
    localStorage.setItem("token", result.token);
    localStorage.setItem("username", username);
    console.log(result)
    return result.token;
  } catch (error) {
    console.log(error);
  }
};

export const getAllRoutines = async () => {
  try {
    const response = await fetch (`${BASE_URL}/routines`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    const result = await response.json();
    return result
  } catch (error) {
    console.log(error)
  }
}

export const getMyRoutines = async () => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  try {
    const response = await fetch (`${BASE_URL}/users/${username}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    const result = await response.json();
    console.log(result, "myRoutines");
    return result
  } catch (error) {
    console.log(error)
  }
}

export const createNewRoutine = async (name, goal, isPublic) => {
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
        isPublic: isPublic
      }),
    });
    const result = await response.json();
    console.log(result, "newRoutine")
    return result.token;
  } catch (error) {
    console.log(error);
  }
};