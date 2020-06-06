import React from "react";
import classes from "./Members.module.css";

export const Members = ({ roomUsers }) => {
  return (
    <div className={classes.members}>
      <h2>Room Members</h2>
      <ol>
        {roomUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};
