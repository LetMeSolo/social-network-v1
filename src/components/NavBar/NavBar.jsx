import React from "react";
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const activeLink = ({isActive}) => isActive ? style.selected : style.navBar_item;

    return (
        <nav className={style.navBar}>
            <div className={style.navBar_item}>
                <NavLink to='/profile' className={activeLink}><img className={style.icon_img}
                                                                   src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/user_account_profile-2-256.png"
                                                                   alt="icon"/>Profile</NavLink>
            </div>
            <div className={style.navBar_item}>
                <NavLink to='/dialogs' className={activeLink}><img className={style.icon_img}
                                                                   src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/chat_bubble_notification_message-2-256.png"
                                                                   alt="icon"/>Messages</NavLink>
            </div>
            <div className={style.navBar_item}>
                <NavLink to='/news' className={activeLink}><img className={style.icon_img}
                                                                src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/lightning_bolt_flash_power-2-256.png"
                                                                alt="icon"/>News</NavLink>
            </div>
            <div className={style.navBar_item}>
                <NavLink to='/music' className={activeLink}><img className={style.icon_img}
                                                                 src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/music_audio_song_sound-2-256.png"
                                                                 alt="icon"/>Music</NavLink>
            </div>
            <div className={style.navBar_item}>
                <NavLink to='/settings' className={activeLink}><img className={style.icon_img}
                                                                    src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/settings-3-256.png"
                                                                    alt="icon"/>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;