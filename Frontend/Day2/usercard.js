// UserCard.js
import React from "react";

const UserCard = ({ name, age, image, isOnline }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      
      <h2>{name}</h2>
      <p>Age: {age}</p>

      {/* Conditional Rendering */}
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>

      {/* Follow Button */}
      <button>
        {isOnline ? "Follow" : "Cannot Follow"}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
};

export default UserCard;