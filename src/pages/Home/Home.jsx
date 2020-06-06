import React, { useEffect } from "react";
import classes from "./Home.module.css";
import { Form } from "../../styled-components/Form";
import { Input } from "../../components/Input/Input";
import { useInput } from "../../hooks/useInput";
import { Button } from "../../styled-components/Button";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const [name, changeName, resetName] = useInput("");
  const [room, changeRoom, resetRoom] = useInput("");
  const history = useHistory();

  const joinRoom = (e) => {
    e.preventDefault();
    const validName = name.trim().length;
    const validRoom = room.trim().length;
    if (validName && validRoom)
      history.push(`/room?name=${name.trim()}&room=${room.trim()}`);
  };

  return (
    <section className={classes.home}>
      <h1 className={classes.heading}>ChatUp - Let's chat</h1>
      <h3 className={classes.subHeading}>Join a room to start chatting.</h3>
      <Form onSubmit={joinRoom}>
        <Input
          type="text"
          placeholder="Your Name..."
          label="Name"
          id="name"
          value={name}
          onChange={changeName}
        />
        <Input
          type="text"
          placeholder="Room Name..."
          label="Room"
          id="room"
          value={room}
          onChange={changeRoom}
        />
        <Button block margin="1.2rem 0 0 0">
          JOIN
        </Button>
      </Form>
    </section>
  );
};
