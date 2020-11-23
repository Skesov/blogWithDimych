import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <h1>
        <a id={s.item} href="/">Valera</a>
      </h1>
    </header>
  );
}

export default Header;
