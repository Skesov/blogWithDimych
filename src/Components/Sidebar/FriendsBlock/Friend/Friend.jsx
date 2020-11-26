import React from "react";
import styles from "./../FriendsBlock.module.css";

function Friend(props) {
  return (
    <div className={styles.friend}>
      <img src={props.state.avatar} className={styles.friendImage} alt="" />
      <p className={styles.friendName}>{props.state.name}</p>
    </div>
  );
}

export default Friend;
