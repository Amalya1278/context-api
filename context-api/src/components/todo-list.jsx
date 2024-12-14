import { List } from "./list";
import { ToDoAdd } from "./todo-add";
import { ToDoFilter } from "./todo-filter";
import { ThemeSwitcher } from "./theme";

export const ToDoList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <ThemeSwitcher />
      <ToDoAdd />
      <ToDoFilter />
      <List />
    </div>
  );
};