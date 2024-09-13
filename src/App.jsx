import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 9;
  const [counter, setCounter] = useState(0);
  console.log(<App></App>);
  const incrementVal = () => {
    setCounter((counter) => counter + 1);
  };
  const decrementVal = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };
  return (
    <>
      <p>{counter}</p>
      <button onClick={incrementVal}>click me to Add</button>
      <button onClick={decrementVal} className={counter == 0 ? "disable" : ""}>
        click me to subs
      </button>
    </>
  );
}

export default App;
