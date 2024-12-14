import { useState } from "react";
import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ToDoItem = ({ todo }) => {
  const { onUpdate, onAddSubtask,onToggleSubtask } = useContext(ToDoContext);
  const [subtaskText, setSubtaskText] = useState("");

  const handleAddSubtask = () => {
    if (subtaskText.trim()) {
      onAddSubtask(todo.id, { text: subtaskText });
      setSubtaskText(""); 
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700">
      <h3 className={`text-lg ${todo.category == "urgent" ? "text-red-500 font-bold" : "text-green-500 font-medium"}`}>
        {todo.text}
      </h3>
      <p className="text-gray-400">{todo.description}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => onUpdate(todo.id)}
          className={`px-3 py-1 text-sm font-semibold rounded-md shadow hover:bg-emerald-500 ${
            todo.completed ? "bg-red-500 text-gray-900" : "bg-indigo-500 text-white"
          }`}
        >
          {todo.completed ? "Not complete" : "Complete"}
        </button>
      </div>
      <ul className="mt-2 pl-4 list-disc text-gray-300">
  {todo.subtasks.map((subtask) => (
    <li key={subtask.id} className="flex justify-between items-center">
      <span>{subtask.text}</span>
      <button
        onClick={() => onToggleSubtask(todo.id, subtask.id)}
        className={`ml-2 px-2 py-1 text-sm rounded ${
          subtask.completed ? "bg-green-500 text-white" : "bg-gray-400 text-black"
        }`}
      >
        {subtask.completed ? "Uncomplete" : "Complete"}
      </button>
    </li>
  ))}
</ul>
<div className="flex items-center space-x-2 mt-4">
  <input
    type="text"
    value={subtaskText}
    onChange={(e) => setSubtaskText(e.target.value)}
    placeholder="Add a subtask"
    className="flex-grow px-3 py-1 text-sm bg-gray-900 text-white rounded-lg focus:ring-emerald-500 focus:outline-none"
  />
  <button
    onClick={handleAddSubtask}
    className="px-3 py-1 text-sm font-semibold bg-indigo-400 text-gray-800 rounded-md shadow hover:bg-indigo-500"
  >
    Add
  </button>
</div>

    </div>
  );
};
