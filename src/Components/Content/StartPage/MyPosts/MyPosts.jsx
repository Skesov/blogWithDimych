import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
  let posts = props.posts;

  let postsElements = posts.map((post, index) => {
    return <Post key={index} message={post.text} likesCount={post.likes} />;
  });

  return (
    <section className="Posts">
      <h2>My Posts</h2>
      <form>
        <textarea
          id="postInputArea"
          name="newpost"
          placeholder="Your news"
        ></textarea>
        <button id="postButton" type="submit">
          Send
        </button>
      </form>
      <div className="ListOfPosts">{postsElements}</div>
    </section>
  );
}

export default MyPosts;
