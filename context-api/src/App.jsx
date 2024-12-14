import { useState } from "react";
import { ToDoList } from "./components/todo-list";
import { ToDoContext } from "./todo-context";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 101, text: "css task", description: "do something", completed: true, category: "urgent", subtasks: [] },
    { id: 102, text: "js task", description: "do something", completed: false, category: "normal", subtasks: [] },
    { id: 103, text: "react task", description: "do something", completed: true, category: "urgent", subtasks: [] },
    { id: 104, text: "node task", description: "do something", completed: false, category: "normal", subtasks: [] },
  ]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [theme, setTheme] = useState("dark");
  const [filters, setFilters] = useState(["all", "active", "completed", "urgent", "normal"]);

  const handleUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          const completedSub = todo.subtasks.every((subtask) => subtask.completed);
          return { ...todo, completed: completedSub ? !todo.completed : false };
        }
        return todo;
      })
    );
  };

  const handleAdd = (todo) => {
    setTodos([...todos, { ...todo, completed: false, id: Date.now(), subtasks: [] }]);
  };

  const toggleTheme = () => {
    setTheme((item) => (item == "dark" ? "light" : "dark"));
  };
  const handleAddSubtask = (todoId, subtask) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          const newSubtask = { id: Date.now(), text: subtask.text, completed: false };
          return { ...todo, subtasks: [...todo.subtasks, newSubtask] };
        }
        return todo;
      })
    );                                                      
    console.log(todos); 
  };
  
  

  const handleSubtaskUpdate = (todoId, subtaskId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          const updatedSubtasks = todo.subtasks.map((subtask) =>
            subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask
          );

          const allSubtasksCompleted = updatedSubtasks.every((subtask) => subtask.completed);
          return { ...todo, subtasks: updatedSubtasks, completed: allSubtasksCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <div className={theme === "dark" ? "bg-black-900 text-black" : "bg-gray-100 text-black"}>
      <ToDoContext.Provider
        value={{
          todos,
          onUpdate: handleUpdate,
          onAdd: handleAdd,
          filters,
          currentFilter,
          onFilter: setCurrentFilter,
          onAddSubtask: handleAddSubtask, 
          onToggleSubtask:handleSubtaskUpdate,
          theme,
          toggleTheme,
        }}
      >
        <ToDoList />
      </ToDoContext.Provider>
    </div>
  );
}
