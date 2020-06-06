import React, { useEffect, useRef } from "react";
import classes from "./Messages.module.css";
import { Message } from "../Message/Message";

export const Messages = ({ messages }) => {
  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);
  const ref = useRef();

  return (
    <div ref={ref} className={classes.messages}>
      {messages.map((msg, i) => (
        <Message key={i} {...msg} />
      ))}
    </div>
  );
};
