import React from "react";


const Card = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        padding: "120px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
