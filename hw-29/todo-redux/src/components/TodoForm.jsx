import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/slice/todosSlice";

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
    const newTodo = {
      id: +Date.now(),
      name: data.todo.trim(),
      checked: false,
    };
    dispatch(addItem(newTodo)); // Додаємо туду через Redux
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
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
        <button className="btn btn-outline-success" type="submit">
          Add
        </button>
      </div>
      {errors.todo && <p className="text-danger mt-2">{errors.todo.message}</p>}
    </form>
  );
};

export default TodoForm;
