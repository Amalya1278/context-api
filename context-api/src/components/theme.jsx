import { useContext } from "react";
import { ToDoContext } from "../todo-context";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ToDoContext)
    return (
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded ${
          theme === "dark" ? "bg-indigo-500 text-white hover:bg-indigo-600" : "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
        }`}
      >
        {theme === "dark" ? "Light Mode" : " Dark Mode"}
      </button>
    );
  };
  