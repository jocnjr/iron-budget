import React from "react";
import Item from "./Item";

const Main = (props) => (
  <div className="section">
    <h1 style={{ marginBottom: "45px" }} className="title is-1">
      Items
    </h1>
    <div className="columns">
      {props.items.map((item) => (
        <Item
          key={item.name}
          clickHandler={props.clickHandler}
          size={props.size}
          {...item}
        />
      ))}
    </div>
  </div>
);

export default Main;
