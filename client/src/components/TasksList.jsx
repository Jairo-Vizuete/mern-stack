import React, { useEffect, useState } from "react";
import { getTasksList, getTaskByIDAPI } from "../api/tasks.api";
import TaskCard from "./TaskCard";

function TasksList() {
  const [tasks, setTasks] = useState(null);
  const [task, setTask] = useState(null);
  const [idTask, setIdTask] = useState(0);

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    // const result = await axios.get("http://localhost:4000/tasks");
    try {
      const result = await getTasksList();
      console.log(result);
      setTasks(result.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getTaskByID = async () => {
    // const result = await axios.get(`http://localhost:4000/tasks/${idTask}`);
    // setTask(result.data[0]);
    try {
      const result = await getTaskByIDAPI(idTask);
      setTask(result.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  function renderMain() {
    if (tasks.length == 0) {
      return <h1>No task yet</h1>;
    }
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1>TASKS</h1>
      {tasks && tasks.length}
      <br />
      {tasks && renderMain()}
      {/* {tasks &&
        tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })} */}
      <br />
      Please enter an id to retrieve the task
      <input onChange={(e) => setIdTask(e.target.value)} />
      <button onClick={getTaskByID}>Search</button>
      {task && (
        <p>
          {task.title} - {task.description}
        </p>
      )}
    </div>
  );
}

export default TasksList;
