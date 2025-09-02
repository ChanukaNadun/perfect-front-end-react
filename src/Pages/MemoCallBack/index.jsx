import React, { useState, useMemo, useCallback } from "react";
import ExpensiveComponent from "../../components/useMemoAndCallBack/ExpensiveComponent";
import ParentUseCallback from "../../components/useMemoAndCallBack/ParentUseCallback";
import ProductList from "../../components/useMemoAndCallBack/ProductList";
import HeavyComputation from "../../components/useMemoAndCallBack/HeavyComputation";

// 🐢 Simulate a heavy filter function (500ms delay)
function slowFilter(users, search) {
  console.log("Running slow filter...");

  const start = performance.now();
  while (performance.now() - start < 500) {} // block for 500ms

  return users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );
}

// 👶 Child component (memoized)
const UserItem = React.memo(({ user, onSelect }) => {
  console.log("Rendering:", user.name);
  return <li onClick={() => onSelect(user)}>{user.name}</li>;
});

const users = Array.from({ length: 2000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));

export default function MemoCallBack() {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(null);

  const [count, setCount] = useState(0);
  const items = ["Banana", "Apple", "Mango", "Orange", "Pineapple"];
  const numbers = [1, 5, 3, 9, 2, 7];

  const handleChildClick = useCallback(() => {
    console.log("Child clicked!");
  }, []);

  // ✅ useMemo → avoid re-running slow filter unnecessarily
  const filteredUsers = useMemo(
    () => slowFilter(users, search),
    [users, search]
  );

  // ✅ useCallback → stable function reference
  const handleSelect = useCallback((user) => {
    setSelected(user);
  }, []);

  return (
    <div>
      <h2>useMemo + useCallback Demo</h2>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users..."
      />

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>Toggle state: {String(toggle)}</p>

      <ul>
        {filteredUsers.slice(0, 10).map((u) => (
          <UserItem key={u.id} user={u} onSelect={handleSelect} />
        ))}
      </ul>

      {selected && <p>Selected: {selected.name}</p>}

      <div style={{ padding: "20px" }}>
        <h2>useMemo & useCallback Playground</h2>
        <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
        <p>Count: {count}</p>

        <ExpensiveComponent numbers={numbers} />
        <ParentUseCallback onClick={handleChildClick} />
        <ProductList products={items} />
      </div>
      <HeavyComputation />
    </div>
  );
}
