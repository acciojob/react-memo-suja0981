import React from "react";

const ReactMemo = ({ todos }) => {
  return (
    <div>
      {todos && todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default React.memo(ReactMemo);
