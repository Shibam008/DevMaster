import "../App.css";
import { memo } from "react";

const Child = () => {
  console.log("Child rendered.");
  return (
    <div className="child">
      <h1>Child Component</h1>
    </div>
  );
};

export default memo(Child);
