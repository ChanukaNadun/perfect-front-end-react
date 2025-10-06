import React from 'react'

function GroupAndCount() {
    const grouped = users.reduce((acc, user) => {
      (acc[user.role] = acc[user.role] || []).push(user.name);
      return acc;
    }, {});

    const freq = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    console.log("grouped", grouped);
    console.log("freq", freq);

  return <div></div>;
}

export default GroupAndCount;

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
];

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];