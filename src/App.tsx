import { useState } from "react";
import "./App.css";

interface DemoProps {}
function App({}: DemoProps) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Cont: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button style={{marginLeft:10}} onClick={() => setCount(count - 1)}>Increase</button>
    </>
  );
}

export default App;
