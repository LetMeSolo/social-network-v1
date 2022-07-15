import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <img className={style.social_logo} src='https://cdn4.iconfinder.com/data/icons/mars-mission-1/32/technology_News_Events_Mars_emoji-256.png' alt='logo'/>
            </div>
        </header>
    )
}

export default Header;