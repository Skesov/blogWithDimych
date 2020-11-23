import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo(props) {
  return (
    <div className={s.contact}>
      <img
        src="https://sun1-99.userapi.com/3fxJKiYTTSJRF1FRi6Ag1gtTm-2SCbXq4BuBcA/6FigJrq0Sy0.jpg"
        className={s.avatar}
        alt="doggy"
      />
      <div className={s.details}>
        <p className={s.fullName}>Vladimir S.</p>
        <br />
        <ul className={s.descrtiption}>
          <li>Date of Birth: 3 February</li>
          <li>City: Krasnodar</li>
          <li>Education: KUBSTU '11</li>
          <li>Website: https://skesov.com/</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;
