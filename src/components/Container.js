import React from "react";
import Title from "./Title";
import Main from "./Main";

const Container = (props) => (
  <div className="container">
    <Title color={props.color} budget={props.budget} />
    <Main {...props} />
  </div>
);

export default Container;
