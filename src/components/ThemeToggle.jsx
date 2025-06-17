import React from "react";
import { Button } from "@mui/material";

export default function ThemeToggle({ mode, setMode }) {
  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Button onClick={toggleTheme} sx={{ mb: 2 }} variant="contained">
      Toggle {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}
