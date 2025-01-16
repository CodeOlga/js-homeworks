/* eslint-disable react/prop-types */
import { Stack, Paper, Checkbox, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => {
  return {
    textAlign: "left",
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <Stack spacing={2} sx={{ marginTop: "10px" }}>
      {todos.map((todo) => (
        <Item key={todo.id}>
          <div>
            <Checkbox
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id)}
            />

            <span
              style={{
                textDecoration: todo.checked ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.name}
            </span>
          </div>
          <IconButton
            color="error"
            sx={{ p: "10px" }}
            onClick={() => deleteTodo(todo.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Item>
      ))}
    </Stack>
  );
};

export default TodoList;
