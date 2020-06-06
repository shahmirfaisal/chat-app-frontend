import React, { useEffect, useState } from "react";
import classes from "./Room.module.css";
import { Button } from "../../styled-components/Button";
import { Header } from "../../components/Header/Header";
import { Messages } from "../../components/Messages/Messages";
import { useInput } from "../../hooks/useInput";
import io from "socket.io-client";
import { useHistory } from "react-router-dom";

export const Room = ({
  addMessage,
  messages,
  clearMessages,
  addRoomUsers,
  roomUsers,
}) => {
  const [message, changeMessage, resetMessage] = useInput("");
  const [socket, setSocket] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name").trim();
    const room = queryParams.get("room").trim().toLowerCase();

    if (!name.length || !room.length) history.replace("/");

    const socket = io("https://socket-io-node-chat-app.herokuapp.com/");
    setSocket(socket);

    socket.emit("joinRoom", { name, room });

    socket.on("message", (msg) => {
      addMessage(msg);
    });

    socket.on("roomUsers", (users) => {
      addRoomUsers(users);
    });

    return () => {
      socket.disconnect();
      clearMessages();
    };
  }, []);

  const sentMessage = (e) => {
    e.preventDefault();
    const validMessage = message.trim().length;
    if (validMessage) socket.emit("chatMessage", message.trim());
    resetMessage();
  };

  return (
    <section className={classes.room}>
      <Header roomUsers={roomUsers} />

      <Messages messages={messages} />

      <form onSubmit={sentMessage} className={classes.form}>
        <input
          type="text"
          placeholder="Message..."
          value={message}
          onChange={changeMessage}
        />
        <Button style={{ borderRadius: "0" }}>
          <i className="fas fa-paper-plane"></i>
        </Button>
      </form>
    </section>
  );
};
