import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [p, setp] = useState("");
  const write = () => {
    setp(value);
  };
  return (
    <div className="App">
      <b>
        <p style={{ fontSize: 30 }}>React Select Dropdown onChange</p>
      </b>
      <b>
        {" "}
        <span>Select Category: </span>
      </b>
      <select onChange={(e) => setValue(e.target.value)}>
        <option>PHP</option>
        <option>Laravel</option>
        <option>Angular</option>
        <option>React</option>
        <option>Java</option>
      </select>
      <button onClick={write}>submit</button>
      <br />
      <p style={{ color: "red" }}>{p}</p>
    </div>
  );
}
