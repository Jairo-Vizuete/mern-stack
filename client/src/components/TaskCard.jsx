import { deleteTask } from "../api/tasks.api";

function TaskCard({ task }) {
  const handleDeleteTaskByID = async (taskId) => {
    try {
      const result = await deleteTask(taskId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button>🖊️ EDITAR</button>
      <button onClick={() => handleDeleteTaskByID(task.id)}>🗑️ ELIMINAR</button>
    </div>
  );
}

export default TaskCard;