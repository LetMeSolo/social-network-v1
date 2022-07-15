import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import AppRoutes from "./AppRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header />
                <NavBar />
                <div className='app_wrapper_content'>
                    <AppRoutes/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
