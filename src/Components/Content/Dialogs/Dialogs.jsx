import React from "react";

import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


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
