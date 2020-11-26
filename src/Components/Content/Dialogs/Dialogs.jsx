import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
  let friends = props.state.friends;
  let messages = props.state.messages;

  let friendsElements = friends.map((item, index) => {
    return <DialogItem key={index} userID={item.userID} name={item.name} />;
  });
  let messagesElements = messages.map((item, index) => {
    let turnRight = false
    let avatar = friends[0].avatar
    if (index%2 === 0) {
      turnRight = true
      avatar = friends[1].avatar

    }
    return <Message key={index} text={item.text} avatar={avatar} turnRight={turnRight} />;
  });

  return (
    <section className={s.dialogs}>
      <div className={s.dialogsItems}>{friendsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </section>
  );
}

export default Dialogs;
