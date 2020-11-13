import React, { useCallback, useState, useMemo } from "react";
import Button from "./components/Button";
import "./App.css";

const themes = [{ shadowColor: "black" }, { shadowColor: "red" }];

function App() {
  console.log("App: rendering");
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(themes[0]);

  const handleClick = useCallback(() => setCount((count) => count + 1), []);
  const changeTheme = useCallback(() => {
    if (theme === themes[0]) {
      setTheme(themes[1]);
    } else {
      setTheme(themes[0]);
    }
  }, [theme]);

  const buttonStyle = useMemo(
    () => ({
      borderRadius: 0,
      border: `1px solid black`,
      padding: "0.5rem 1rem",
      boxShadow: `5px 10px ${theme.shadowColor}`,
      outline: "none",
      cursor: "pointer",
    }),
    []
  );

  return (
    <>
      <div className="App-controls">
        <Button onClick={changeTheme}>
          change theme
        </Button>
      </div>
      <div className="App">
        <p>{count}</p>
        <Button style={buttonStyle} onClick={handleClick}>
          +1
        </Button>
      </div>
    </>
  );
}

export default App;
