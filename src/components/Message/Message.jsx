import React from "react";
import classes from "./Message.module.css";

export const Message = ({ name, text }) => {
  return (
    <div className={classes.message}>
      <header>
        <h5>{name}</h5>
      </header>
      <p>{text}</p>
    </div>
  );
};
