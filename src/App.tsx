import React from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  console.log("App: rendering");
  const [count, setCout] = React.useState(0);

  return (
    <div className="App">
      <p>{count}</p>
      <Button onClick={() => setCout(count+1)}>+1</Button>
    </div>
  );
}

export default App;
