import React from "react";
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";

function StartPage(props) {
  return (
    <div>
      <Profile />
      <MyPosts posts={props.posts}/>
    </div>
  );
}

export default StartPage;
