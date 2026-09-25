import React, { useState } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";
import "../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState(["New todo"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [customTasks, setCustomTasks] = useState([]);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleCustomSubmit = (e) => {
    if (e) e.preventDefault();
    if (input.trim().length > 5) {
      setTodos((prev) => [...prev, input.trim()]);
      setCustomTasks((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  return (
    <div id="main">
      <h1>React.memo</h1>
      <div>
        <ReactMemo todos={todos} />
        <button id="add-todo-btn" onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <hr />

      <div>
        <span>Count: {count} </span>
        <button id="incr-btn" onClick={increment}>
          +
        </button>
        <UseMemo count={count} />
      </div>

      <hr />

      <div>
        <h2>React.memo Input</h2>
        <input
          type="text"
          id="skill-input"
          placeholder="Enter task (> 5 chars)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="submit-btn" onClick={handleCustomSubmit}>
          Submit
        </button>
        <ul>
          {customTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
