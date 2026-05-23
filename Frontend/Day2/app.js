// App.js
import React from "react";
import UserCard from "./usercard";

function App() {
  const users = [
    {
      id: 1,
      name: "Prachi",
      age: 18,
      image: "https://i.pravatar.cc/100?img=1",
      isOnline: true,
    },
    {
      id: 2,
      name: "Aarav",
      age: 20,
      image: "https://i.pravatar.cc/100?img=2",
      isOnline: false,
    },
    {
      id: 3,
      name: "Riya",
      age: 19,
      image: "https://i.pravatar.cc/100?img=3",
      isOnline: true,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          image={user.image}
          isOnline={user.isOnline}
        />
      ))}
    </div>
  );
}

export default App;