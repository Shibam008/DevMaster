import { useEffect, useState } from "react";

const Alpha = () => {
  const [count, setCount] = useState(0);

  // it will trigger when component is mounted for the first time
  useEffect(() => {
    console.log("re-render happend in child component");
  }, []);

  // when the component unmount this code will execute
  useEffect(() => {
    return () => {
      setCount(0);
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Alpha {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Alpha;
