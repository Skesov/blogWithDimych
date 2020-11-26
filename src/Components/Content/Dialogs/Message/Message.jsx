import React from "react";
import s from "./Message.module.css";

function Message(props) {
  let style = {};
  let rightSide = "";
  if (props.turnRight) {
    style = { float: "right" };
    rightSide = s.rightSide
  } else {
    style = { float: "left" };
  }

  return (
    <div className={`${s.message} ${rightSide}`}>
      <img
        className={s.messageAvatar}
        src={props.avatar}
        alt=""
        style={style}
      />
      <div className={s.textMessage}>{props.text}</div>
    </div>
  );
}

export default Message;
