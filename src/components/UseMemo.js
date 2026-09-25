import React, { useMemo } from "react";

const UseMemo = ({ count }) => {
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <p>{calculation}</p>
    </div>
  );
};

export default UseMemo;
