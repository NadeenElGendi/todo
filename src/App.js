import React, { useState } from "react";
import { Container, Typography, Box, Alert } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

export default function App({ mode, setMode }) {
  const [todos, setTodos] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTodo = ({ task, date }) => {
    if (task === "" || !date) {
      setErrorMessage("Please enter both task and date.");
      setTimeout(() => setErrorMessage(""), 2000);
      return;
    }

    const newTodo = { id: Date.now(), task, date, isCompleted: false };
    setTodos([...todos, newTodo]);

    setSuccessMessage("Your task was added successfully!");
    setTimeout(() => setSuccessMessage(""), 2000);
    return true;
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    return true;
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      <ThemeToggle mode={mode} setMode={setMode} />

      <Typography
        variant="h3"
        sx={{ color: "secondary.main", fontFamily: "fantasy" }}
      >
        Todo Application
      </Typography>

      {successMessage && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ mt: 2 }}
        >
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert
          icon={<ErrorIcon fontSize="inherit" />}
          severity="error"
          sx={{ mt: 2 }}
        >
          {errorMessage}
        </Alert>
      )}

      <TodoForm addTodo={addTodo} />

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: "warning.main", fontFamily: "fantasy" }}
        >
          Pending Tasks
        </Typography>
        <TodoList
          todos={todos.filter((t) => !t.isCompleted)}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{ color: "success.main", fontFamily: "fantasy" }}
        >
          Completed Tasks
        </Typography>
        <TodoList
          todos={todos.filter((t) => t.isCompleted)}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </Box>
    </Container>
  );
}
