import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};
