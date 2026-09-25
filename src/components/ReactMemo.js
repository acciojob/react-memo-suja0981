import React from "react";

const ReactMemo = ({ todos }) => {
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default React.memo(ReactMemo);









