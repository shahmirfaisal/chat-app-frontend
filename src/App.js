import React, { useState } from "react";
import { Home } from "./pages/Home/Home";
import { Route } from "react-router-dom";
import { Room } from "./pages/Room/Room";

export const App = () => {
  const [roomUsers, setRoomUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages((messages) => messages.concat(msg));
  };

  const addRoomUsers = (users) => setRoomUsers(users);

  const clearMessages = () => setMessages([]);

  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route
        path="/room"
        render={() => (
          <Room
            roomUsers={roomUsers}
            addRoomUsers={addRoomUsers}
            clearMessages={clearMessages}
            messages={messages}
            addMessage={addMessage}
          />
        )}
      />
    </div>
  );
};
