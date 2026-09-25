import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
import "../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState(["New todo"]);
  const [count, setCount] = useState(0);
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const handleCustomSubmit = (e) => {
    if (e) e.preventDefault();
    if (skill.length <= 5) {
      return;
    }
    setSkills((prev) => [...prev, skill]);
    setSkill("");
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
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button id="skill-btn" onClick={handleCustomSubmit}>
          Add Skill
        </button>
        <ReactMemo skills={skills} />
      </div>
    </div>
  );
};

export default App;
