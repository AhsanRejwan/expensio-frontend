import React from 'react';
import {Topbar} from "./components/Topbar";
import './App.scss';

export const App = () => {
    return (
        <div className="app bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 h-screen">
            <Topbar/>
        </div>
    );
}
