import axios from "axios";
//hello
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

const registerUser = async (data) => {
  try {
    const res = await api.post("register", data); // Assuming the register route is /api/register
    return res.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

const loginUser = async (data) => {
  try {
    const res = await api.post("login", data); // Assuming the login route is /api/login
    return res.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
};

const fetchDesignationsAndPositionsApi = async () => {
  try {
    const response = await api.get("designations-and-positions");
    return response.data;
  } catch (error) {
    console.error("Error fetching designations and positions:", error);
    throw error;
  }
};

export { loginUser, registerUser, fetchDesignationsAndPositionsApi };
