import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/slice/todosSlice";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: "",
    },
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTodo(data.todo)); // Відправляємо туду через thunk
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <div className="input-group">
        <input
          {...register("todo", {
            required: "Field is required",
            minLength: {
              value: 2,
              message: "Min length is 2 symbols",
            },
          })}
          type="text"
          className={`form-control ${errors.todo ? "is-invalid" : ""}`}
          placeholder="Add a new todo..."
        />
        <button className="btn btn-outline-success" type="submit">
          Add
        </button>
      </div>
      {errors.todo && <p className="text-danger mt-2">{errors.todo.message}</p>}
    </form>
  );
};

export default TodoForm;
