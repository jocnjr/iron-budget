import React from "react";

const Item = ({ clickHandler, size, icon, price, name }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const item = {
    margin: "0 auto",
  };

  return (
    <div className="column" style={style}>
      <i style={{ ...item, ...size }} className={icon}></i>
      <h1 style={item} className="title is-4">
        {name}
      </h1>
      <button className="button is-info" onClick={() => clickHandler(price)}>
        ${price.toFixed(2)}
      </button>
    </div>
  );
};

export default Item;
