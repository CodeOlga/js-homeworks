import { useSelector } from "react-redux";

import { todosItems } from "../redux/slice/selectors";

const TodoList = () => {
  const todos = useSelector(todosItems);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {todo.name}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
