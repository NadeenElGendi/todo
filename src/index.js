import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

const Root = () => {
  const [mode, setMode] = React.useState("light");
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
