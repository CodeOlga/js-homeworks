/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Button from "./Button";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
      setError("");
    } else {
      setError("Error");
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
        />
        <Button className="btn btn-outline-success" title="Add" type="submit" />
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}{" "}
    </form>
  );
};

export default TodoForm;
