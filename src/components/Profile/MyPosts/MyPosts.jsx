import React from 'react';
import Post from "./Post/Post";
import style from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            <h4>My post</h4>
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={style.container_posts}>
                <Post message="It's my first post" likesCounter='17' />
                <Post message='Hi, how are you?' likesCounter='22' />
            </div>
        </div>
    );
};

export default MyPosts;