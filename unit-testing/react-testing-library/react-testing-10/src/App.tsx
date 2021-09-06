import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p data-testid="current-count">{count}</p>
      <button data-testid="btn" onClick={() => setCount(count + 1)}>
        <span>button</span>
      </button>
    </div>
  );
};

export default Counter;
