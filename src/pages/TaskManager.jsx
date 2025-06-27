import { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Task Manager
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          placeholder="Add new task"
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded border ${
            filter === "all"
              ? "bg-blue-600 text-white"
              : "text-gray-700 dark:text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded border ${
            filter === "active"
              ? "bg-blue-600 text-white"
              : "text-gray-700 dark:text-white"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded border ${
            filter === "completed"
              ? "bg-blue-600 text-white"
              : "text-gray-700 dark:text-white"
          }`}
        >
          Completed
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">No tasks to show.</p>
      ) : (
        <ul>
          {filteredTasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 p-2 border rounded dark:border-gray-600 dark:text-white"
            >
              <span
                onClick={() => toggleTask(index)}
                className={`flex-1 text-left cursor-pointer ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="text-sm text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskManager;
