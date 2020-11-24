import React from "react";

import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

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

export default DialogItem;
