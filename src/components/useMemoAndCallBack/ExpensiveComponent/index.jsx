import { useState, useMemo } from "react";

function ExpensiveComponent({ numbers }) {
  const [count, setCount] = useState(0);

  // Expensive calculation
  const sortedNumbers = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return (
    <div>
      <p>Re-render count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Re-render</button>
      <p>Sorted: {sortedNumbers.join(", ")}</p>
    </div>
  );
}
export default ExpensiveComponent;