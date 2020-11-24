import React from "react";
import Post from "./Post/Post";

let posts = [
  { id: 1, text: "Hey, why nobody love me?", likes: 11 },
  { id: 2, text: "It's our new program! Hey!", likes: 24 },
  { id: 3, text: "Bla bla bla", likes: 3 },
];

let postsElements = posts.map(item => {
  return <Post message={item.text} likesCount={item.likes} />
})

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
        {postsElements}
      </div>
    </section>
  );
}

export default MyPosts;
