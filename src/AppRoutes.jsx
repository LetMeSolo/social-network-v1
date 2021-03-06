import React from 'react';
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/profile' element={<Profile/>} />
            <Route path='/dialogs/*' element={<Dialogs/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music/>} />
            <Route path='/settings' element={<Settings/>} />
        </Routes>
    );
};

export default AppRoutes;