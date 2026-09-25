import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
import "../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState(["New todo"]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleCustomSubmit = (e) => {
    if (e) e.preventDefault();
    if (input.length <= 5) {
      alert("Task must be more than 5 characters");
      setError("Task must be more than 5 characters");
      return;
    }
    setTodos((prev) => [...prev, input]);
    setInput("");
    setError("");
  };

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <div>
        <h2>My todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
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
        <h1>React.memo</h1>
        <input
          type="text"
          id="skill-input"
          placeholder="Enter task (> 5 chars)"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError("");
          }}
        />
        <button id="skill-btn" onClick={handleCustomSubmit}>
          Submit
        </button>
        {error && <p className="error" style={{ color: "red" }}>{error}</p>}
        <ReactMemo todos={todos} />
      </div>
    </div>
  );
};

export default App;
