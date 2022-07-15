import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.dialogs_container}>
            <div className={style.dialogs_items}>
                <div className={style.dialog_item}>
                    <NavLink to='/dialogs/1'>Aleksey</NavLink>
                </div>
                <div className={style.dialog_item}>
                    <NavLink to='/dialogs/2'>Aleksandr</NavLink>
                </div>
                <div className={style.dialog_item}>
                    <NavLink to='/dialogs/3'>Anastassia</NavLink>
                </div>
                <div className={style.dialog_item}>
                    <NavLink to='/dialogs/4'>Nikita</NavLink>
                </div>
                <div className={style.dialog_item}>
                    <NavLink to='/dialogs/5'>Sergey</NavLink>
                </div>
                <div className={style.dialog_item}>
                    <NavLink to='/dialogs/6'>Vladimir</NavLink>
                </div>
            </div>
            <div className={style.dialogs_messages}>
                <div className="message">Hi</div>
                <div className="message">How are you?</div>
                <div className="message">Let me solo please!</div>
            </div>
        </div>
    );
};

export default Dialogs;