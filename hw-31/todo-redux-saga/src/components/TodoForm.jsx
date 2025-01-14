import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { startAddingTodo } from "../redux/slice/todosSlice";
import { isLoading } from "../redux/slice/selectors";

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
  const loading = useSelector(isLoading);

  const onSubmit = (data) => {
    dispatch(startAddingTodo(data.todo.trim()));
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
        <button
          className="btn btn-outline-success"
          type="submit"
          disabled={loading}
        >
          Add
        </button>
      </div>
      {errors.todo && <p className="text-danger mt-2">{errors.todo.message}</p>}
    </form>
  );
};

export default TodoForm;
