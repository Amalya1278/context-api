import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToDoContext } from "../todo-context";

export const ToDoAdd = () => {
  const { onAdd } = useContext(ToDoContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    onAdd(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("text")} placeholder="Task" />
      <textarea {...register("description")} placeholder="Description" />
      <select {...register("category", { required: true })} className="px-3 py-2 rounded-md text-sm bg-gray-900 text-white">
  <option value="urgent">Urgent</option>
  <option value="normal">Normal</option>
</select>
      <button 
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-200"
      >Add</button>
    </form>
  );
};