import React from "react";
import Post from './Post/Post'

function MyPosts() {
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
      <div className="ListOfPosts">
        <Post message="Hey, why nobody love me?" />
        <Post message="It's our new program! Hey!" />
      </div>
    </section>
  );
}

export default MyPosts;
