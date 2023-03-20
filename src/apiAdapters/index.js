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