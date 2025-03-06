import { useState } from "react";
import Layout from "../components/Layout"; 

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Layout>
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">📝 Todo List</h1>
        
        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="p-2 border rounded w-full text-sky-50"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-red-700 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="w-full">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-400">No tasks yet. Start adding some!</p>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`flex justify-between items-center p-3 mb-2 rounded ${
                  task.completed ? "bg-green-500" : "bg-gray-700"
                }`}
              >
                <span
                  className={`cursor-pointer ${
                    task.completed ? "line-through opacity-50" : ""
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-400 hover:text-red-500"
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </Layout>
  );
}

export default TodoList;
