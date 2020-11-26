import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'

function MyPosts(props) {
  let posts = props.posts;

  let postsElements = posts.map((post, index) => {
    return <Post key={index} message={post.text} likesCount={post.likes} />;
  });

  return (
    <section className={s.posts}>
      <h2>My Posts</h2>
      <form>
        <textarea
          id={s.postInputArea}
          name="newpost"
          placeholder="Your news"
        ></textarea>
        <button id={s.postButton} type="submit">
          Send
        </button>
      </form>
      <div className={s.listOfPosts}>{postsElements}</div>
    </section>
  );
}

export default MyPosts;
