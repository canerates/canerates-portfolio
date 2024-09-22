import { React, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeContext } from "./utils/ThemeContext";
import Main from "./pages/Main"
import Test from "./pages/Test"

import { lightTheme, darkTheme } from "./utils/Theme";

import './App.css';


function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "dark";
  });

  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline>
        <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
