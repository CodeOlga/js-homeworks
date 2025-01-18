/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import Button from "./Button";

const TodoList = ({ todos, toggleTodo, deleteTodo, setSelectedTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <div>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id)}
              className="me-2"
            />
            <span
              className={todo.checked ? "text-decoration-line-through" : ""}
              data-bs-toggle="modal"
              onClick={() => setSelectedTodo(todo)}
              style={{ cursor: "pointer" }}
            >
              {todo.name}
            </span>
          </div>
          <Button
            className="btn btn-outline-danger btn-sm"
            title="Delete"
            onClick={() => deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
