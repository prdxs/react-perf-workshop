import React, { useCallback, useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  console.log("App: rendering");
  const [count, setCout] = useState(0);

  const handleClick = useCallback(() => setCout(count + 1), []);

  return (
    <div className="App">
      <p>{count}</p>
      <Button onClick={handleClick}>+1</Button>
    </div>
  );
}

export default App;
