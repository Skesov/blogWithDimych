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

function Dialogs(props) {
  return (
    <section className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem userID="1" name="Dimych" />
        <DialogItem userID="2" name="Andrey" />
        <DialogItem userID="3" name="Sveta" />
        <DialogItem userID="4" name="Sasha" />
        <DialogItem userID="5" name="Viktor" />
        <DialogItem userID="6" name="Valera" />
      </div>
      <div className={s.messages}>
        <Message text="Hi" />
        <Message text="How are you?" />
        <Message text="Not bad" />
      </div>
    </section>
  );
}

export default Dialogs;
