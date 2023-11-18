import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("call an api");
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick} />
    </div>
  );
}

export default App;
