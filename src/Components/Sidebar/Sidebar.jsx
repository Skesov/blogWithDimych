import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import FriendBlock from "./FriendsBlock/FriendsBlock";

function Sidebar(props) {
  return (
    <aside className={s.navbar}>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/music">
          Misic
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.activeLink} to="/settings">
          Settings
        </NavLink>
      </div>

      <FriendBlock state={props.state} />
    </aside>
  );
}

export default Sidebar;
