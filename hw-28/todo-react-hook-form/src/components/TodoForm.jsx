/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import Button from "./Button";

const TodoForm = ({ addTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      todo: "",
    },
  });

  const onSubmitForm = (data) => {
    addTodo(data.todo.trim()); // Передаємо нове todo у батьківський компонент
    reset(); // Очищаємо поле вводу після відправки форми
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="mb-3">
      <div className="input-group">
        <input
          {...register("todo", {
            required: "Field is required",
            minLength: {
              value: 5,
              message: "Min length is 5 symbols",
            },
          })}
          type="text"
          className={`form-control ${errors.todo ? "is-invalid" : ""}`}
          placeholder="Add a new todo..."
        />
        <Button className="btn btn-outline-success" title="Add" type="submit" />
      </div>
      {errors.todo && <p className="text-danger mt-2">{errors.todo.message}</p>}
    </form>
  );
};

export default TodoForm;
