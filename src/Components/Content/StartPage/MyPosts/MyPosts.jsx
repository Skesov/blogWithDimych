import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import {addPostActionCreator, updatePostTextActionCreator} from '../../../../redux/state'


const MyPosts = (props) => {
  let posts = props.posts;

  let postsElements = posts.map((post, index) => {
    return <Post key={index} message={post.text} likesCount={post.likes} />;
  });

  let newPostElement = React.createRef();

  let addPost = (event) => {
    event.preventDefault();
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <section className={s.posts}>
      <h2>My Posts</h2>
      <form onSubmit={addPost}>
        <textarea
          id={s.postInputArea}
          name="newpost"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
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
