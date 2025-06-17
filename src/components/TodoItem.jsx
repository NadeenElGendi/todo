import { useState } from "react";
import { Paper, Typography, Box, TextField, Button } from "@mui/material";
export default function TodoItem({
  todo,
  updateTodo,
  deleteTodo,
  toggleComplete,
  index,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleSave = () => {
    if (!newTask.trim()) return;
    const updated = { ...todo, task: newTask.trim() };
    updateTodo(updated);
    setIsEditing(false);
  };

  return (
    <Paper sx={{ p:2, m:2 }}>
      <Box>
        <Typography
          sx={{
            textDecoration: todo.isCompleted ? "line-through" : "none", color: "primary.main", fontWeight: "bold" 
          }}
        >
          {index}.
          {isEditing ? (
            <TextField
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              size="small"
              
            />
          ) : (
            todo.task
          )}
        </Typography>

        <Typography sx={{ color: "secondary.main", fontWeight: "bold" }}>
          {new Date(todo.date).toLocaleDateString()} -{" "}
          {new Date(todo.date).toLocaleTimeString()}
        </Typography>
      </Box>

      <Box sx={{ m: 1, display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          color={todo.isCompleted ? "warning" : "success"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.isCompleted ? "undo" : "complete"}
        </Button>

        {todo.isCompleted ? null : isEditing ? (
          <Button variant="contained" onClick={handleSave}>
            save 
          </Button>
        ) : (
          <Button
            variant="contained"
            color="info"
            onClick={() => setIsEditing(true)}
          >
            edit
          </Button>
        )}

        <Button
          variant="contained"
          color="error"
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </Button>
      </Box>
    </Paper>
  );
}
