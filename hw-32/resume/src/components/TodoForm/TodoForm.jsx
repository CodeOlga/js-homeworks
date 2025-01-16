/* eslint-disable react/prop-types */
import { useState } from "react";

import { Paper, Divider, InputBase, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
    <Paper
      elevation={3}
      sx={{
        p: "2px 4px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo..."
        required
      />
      <Divider sx={{ height: 36, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" color="secondary" sx={{ p: "10px" }}>
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default TodoForm;
