import React from "react";

const Budget = ({ color, budget }) => {
  return (
    <p
      style={budget < 0 ? { color: "red" } : { color }}
      className="subtitle is-3"
    >
      budget is: ${budget.toFixed(2)}
    </p>
  );
};

export default Budget;
