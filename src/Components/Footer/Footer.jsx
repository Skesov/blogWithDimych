import React from "react";
import s from './Footer.module.css'

function Footer() {
  return (
    <footer className={s.footer}>
      <p>Vladimir Skesov. {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
