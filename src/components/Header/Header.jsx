import React, { useState, useRef } from "react";
import classes from "./Header.module.css";
import { Members } from "../Members/Members";
import { Backdrop } from "../../styled-components/Backdrop";
import { useHistory } from "react-router-dom";

export const Header = ({ roomUsers }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const ref = useRef();
  const history = useHistory();

  window.addEventListener("click", (e) => {
    if (e.target !== ref.current) setOpenDropdown(false);
  });

  return (
    <header className={classes.header}>
      <h2>{new URLSearchParams(window.location.search).get("room")}</h2>

      <i
        className={`fas fa-ellipsis-v ${classes.menu}`}
        onClick={() => setOpenDropdown(true)}
        ref={ref}
      ></i>

      <div
        style={{ display: openDropdown ? "block" : "none" }}
        className={classes.dropdown}
      >
        <div onClick={() => setShowMembers(true)}>Members</div>
        <div onClick={() => history.push("/")}>Leave Room</div>
      </div>

      {showMembers ? (
        <>
          <Backdrop onClick={() => setShowMembers(false)} />
          <Members roomUsers={roomUsers} />
        </>
      ) : null}
    </header>
  );
};
