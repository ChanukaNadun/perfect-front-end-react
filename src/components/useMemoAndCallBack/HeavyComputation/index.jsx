// components/HeavyComputation.js
import React, { useState, useMemo } from "react";

function heavyFibonacci(n) {
  if (n <= 1) return n;
  return heavyFibonacci(n - 1) + heavyFibonacci(n - 2);
}

export default function HeavyComputation() {
  const [num, setNum] = useState(35); // 35 is already heavy
  const [count, setCount] = useState(0);

  // ❌ Without useMemo → measure time
  const startNoMemo = performance.now();
  const fibWithoutMemo = heavyFibonacci(num);
  const endNoMemo = performance.now();
  const timeWithoutMemo = (endNoMemo - startNoMemo).toFixed(2);

  // ✅ With useMemo → measure time
  const [fibWithMemo, timeWithMemo] = useMemo(() => {
    const start = performance.now();
    const result = heavyFibonacci(num);
    const end = performance.now();
    return [result, (end - start).toFixed(2)];
  }, [num]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Heavy Computation: Fibonacci</h3>
      <p>Testing with N = {num}</p>

      <div style={{ display: "flex", gap: "30px" }}>
        {/* Without useMemo */}
        <div style={{ flex: 1, border: "1px solid red", padding: "10px" }}>
          <h4>❌ Without useMemo</h4>
          <p>Result: {fibWithoutMemo}</p>
          <p>Render Time: {timeWithoutMemo} ms</p>
        </div>

        {/* With useMemo */}
        <div style={{ flex: 1, border: "1px solid green", padding: "10px" }}>
          <h4>✅ With useMemo</h4>
          <p>Result: {fibWithMemo}</p>
          <p>Render Time: {timeWithMemo} ms</p>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setNum((n) => n + 1)}>Increase N</button>
        <button onClick={() => setCount((c) => c + 1)}>
          Re-render App ({count})
        </button>
      </div>
    </div>
  );
}
