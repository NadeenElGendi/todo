import React from "react";
import { Button } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle({ mode, setMode }) {
  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <Button
      onClick={toggleTheme}
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1300
      }}
      variant={mode === "light" ? "contained" : "outlined"}
      color={mode === "light" ? "primary" : "secondary"}
      startIcon={<DarkModeIcon />}
    >
       {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}
