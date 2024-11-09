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
const InterviewUserSubmit = async (data) => {
  try {
    const response = await api.post("/submit-interview-user",data);
    return response.data;
  } catch (error) {
    console.error("Error fetching designations and positions:", error);
    throw error;
  }
};
const InterviewQuestion = async (data) => {
  try {
    const response = await api.post("/interview-question", data);  // Make sure this endpoint is correct
    return response.data;  // Return the fetched data
  } catch (error) {
    console.error("Error fetching interview questions:", error);
    throw error;  // Rethrow the error to be handled by the calling function
  }
};

export { loginUser, registerUser, fetchDesignationsAndPositionsApi,InterviewUserSubmit,InterviewQuestion };
