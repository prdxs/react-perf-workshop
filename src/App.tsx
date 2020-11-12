import React, { useCallback, useState } from "react";
import Button from "./components/Button";
import "./App.css";

const buttonStyle = {
  borderRadius: 0,
  border: "1px solid black",
  padding: "0.5rem 1rem",
  boxShadow: "5px 10px",
  outline: "none",
  cursor: "pointer",
};

function App() {
  console.log("App: rendering");
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => setCount((count) => count + 1), []);

  return (
    <div className="App">
      <p>{count}</p>
      <Button style={buttonStyle} onClick={handleClick}>
        +1
      </Button>
    </div>
  );
}

export default App;
