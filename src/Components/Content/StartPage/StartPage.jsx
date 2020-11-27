import React from "react";
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";

function StartPage(props) {
  return (
    <div>
      <Profile />
      <MyPosts addPost={props.addPost} posts={props.state.posts}/>
    </div>
  );
}

export default StartPage;
