import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.post_main}>
                <img className={style.icon_profile} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ufo_alien_space_avatar-256.png" alt=""/>
                <p className={style.text_post}>{props.message}</p>
            </div>
            <div className={style.like}>
                <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-256.png" alt="like"/>
                {props.likesCounter}
            </div>
        </div>
    );
};

export default Post;