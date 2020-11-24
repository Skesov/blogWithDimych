import React from "react";

import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function DialogItem(props) {
  return (
    <NavLink
      activeClassName={s.active}
      className={s.dialog}
      to={`/dialogs/${props.userID}`}
    >
      {props.name}
    </NavLink>
  );
}

function Message(props) {
  return <div className={s.message}>{props.text}</div>;
}

let friends = [
  { name: "Dimych", userID: 1 },
  { name: "Andrew", userID: 2 },
  { name: "Sveta", userID: 3 },
  { name: "Sasha", userID: 4 },
  { name: "Viktor", userID: 5 },
  { name: "Valera", userID: 6 },
];

let messages = [
  { id: 1, text: "Hi" },
  { id: 2, text: "How are you?" },
  { id: 3, text: "Not Bad" },
  { id: 4, text: "Whats up!!!" },
  { id: 5, text: "Whazzup!!" },
];

let friendsElements = friends.map((item) => {
  return <DialogItem userID={item.userID} name={item.name} />;
});
let messagesElements = messages.map((item) => {
  return <Message text={item.text} />;
});

function Dialogs(props) {
  return (
    <section className={s.dialogs}>
      <div className={s.dialogsItems}>{friendsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </section>
  );
}

export default Dialogs;
