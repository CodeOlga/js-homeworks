/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control"
          placeholder="Add a new todo..."
          required
        />
        <Button className="btn btn-outline-success" title="Add" type="submit" />
      </div>
    </form>
  );
};

export default TodoForm;
