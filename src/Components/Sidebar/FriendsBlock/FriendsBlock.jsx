import React from "react";
import styles from "./FriendsBlock.module.css";
import Friend from "./Friend/Friend";

function FriendsBlock(props) {
  let friendList = props.state.slice(0, 3);
  return (
    <div className={styles.friendsBlock}>
      <h2 id={styles.title}>Friends</h2>
      <div className={styles.friendsItems}>
        {friendList.map((item, index) => {
          return <Friend key={index} state={item} />;
        })}
      </div>
    </div>
  );
}

export default FriendsBlock;
