import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      <img
        src="https://sun1-99.userapi.com/3fxJKiYTTSJRF1FRi6Ag1gtTm-2SCbXq4BuBcA/6FigJrq0Sy0.jpg"
        className={s.postAvatar}
        alt="avatar"
      />
      <div className={s.textBlock}>
        <p id={s.postText}>{props.message}</p>
        <p id={s.likes}>{`${props.likesCount} likes`}</p>
      </div>
    </div>
  );
}

export default Post;
