import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
export default function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = addTodo({ task: task.trim(), date });
    if (success) {
      setTask("");
      setDate(null);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <DateTimePicker
          label="Select Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </Box>
    </LocalizationProvider>
  );
}
