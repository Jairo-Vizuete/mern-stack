import axios from "axios";

// One way to return something
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

// Other way to return something
export const getTasksList = async () => {
  return await axios.get("http://localhost:4000/tasks");
};

export const getTaskByIDAPI = async (taskID) =>
  await axios.get(`http://localhost:4000/tasks/${taskID}`);

export const deleteTask = async (taskID) => {
  return await axios.delete(`http://localhost:4000/tasks/${taskID}`);
};
