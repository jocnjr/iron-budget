import React from "react";
import Budget from "./Budget";

const Title = (props) => (
  <div className="section">
    <h1 className="title is-2"> IronBudget - Challenge </h1>
    <Budget {...props} />
  </div>
);

export default Title;
