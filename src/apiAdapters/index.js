let BASE_URL = "https://fitness-tracker-server-b2s9.onrender.com";

export const registerNewUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });

      const result = await response.json();
    return result.data.token;
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
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      return result.data.token;
    } catch (error) {
      console.log(error);
    }
  };