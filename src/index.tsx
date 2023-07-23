import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './index.scss';
import {ConfigContextProvider} from "./contexts/ConfigContext";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ConfigContextProvider>
            <App/>
        </ConfigContextProvider>
    </React.StrictMode>
);