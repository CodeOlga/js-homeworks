import { useSelector, useDispatch } from "react-redux";

import { todosItems } from "../redux/slice/selectors";
import { removeItem, setSelectedTodo } from "../redux/slice/todosSlice";

const TodoList = () => {
  const todos = useSelector(todosItems);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {todo.name}
          <div>
            <button
              className="btn btn-outline-primary btn-sm me-2"
              onClick={() => dispatch(setSelectedTodo(todo))}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(removeItem(todo.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
