import React, { useState, useMemo, useCallback } from "react";

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
    </div>
  );
}
