import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
});

export default function ParentUseCallback() {
  const [count, setCount] = useState(0);

  // Stable function reference
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <p>Parent count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
}
