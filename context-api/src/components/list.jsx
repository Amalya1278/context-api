import { useContext } from "react";
import { ToDoItem } from "./todo-item";
import { ToDoContext } from "../todo-context";

export const List = () => {
  const { todos, currentFilter } = useContext(ToDoContext);
  const filteredTodos = todos.filter((todo) => {
    if (currentFilter === "all"){
       return true;
    }
    if (currentFilter === "active") {
      return !todo.completed;
    }
    if (currentFilter === "completed"){
       return todo.completed; 
    }
    return todo.category === currentFilter; 
  });

  return (
    <div className="space-y-4 p-4 bg-gray-900 rounded-lg shadow-lg">
      {
        filteredTodos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
      
      } 
    </div>
  );
};
