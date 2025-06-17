import React from "react";
import { Box } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  updateTodo,
  deleteTodo,
  toggleComplete,
}) {
  return (
    <Box sx={{ mt: 2 }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          index={index + 1}
        />
      ))}
    </Box>
  );
}
