import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let friends = props.friends;
  let messages = props.messages;

  let friendsElements = friends.map((item, index) => {
    return <DialogItem key={index} userID={item.userID} name={item.name} />;
  });
  let messagesElements = messages.map((item, index) => {
    return <Message key={index} text={item.text} />;
  });

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsItems}>{friendsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </section>
  );
}

export default Dialogs;
