import React from "react";
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.profile}>
            <div>
                <img src='https://vjoy.cc/wp-content/uploads/2019/05/1-48.jpg' alt='img'/>
            </div>
            <div>
                <p>avatar + discription</p>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;