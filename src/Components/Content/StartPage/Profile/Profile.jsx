import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {
  return (
    <section className="profile">
      <img
        alt="backgroundImage"
        src="https://7themes.su/php/imres/resize.php?width=1280&height=720&cropratio=16:9&image=/_ph/55/281414458.jpg"
        className={s.pageImage}
      ></img>
      <ProfileInfo />
    </section>
  );
}

export default Profile;
