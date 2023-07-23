import React, {createContext, useContext, useEffect, useState} from 'react';
import {ColorThemes} from "../models/enums/ColorThemes";

type ConfigContextType = {
    theme: ColorThemes;
    setTheme: (color: ColorThemes) => void;
}

const DefaultConfigContext: ConfigContextType = {
    theme: ColorThemes.LIGHT,
    setTheme: (color: ColorThemes) => {
        console.log('color not initialized', color);
    },
}

const ctx = createContext(DefaultConfigContext);

export const useConfigContext = () => {
    return useContext<ConfigContextType>(ctx);
};

type ConfigContextProps = {
    children: React.ReactNode;
}
export const ConfigContextProvider = ({children}: ConfigContextProps) => {
    const currentTheme = localStorage.getItem('theme') as ColorThemes;
    const [theme, setTheme] = useState(currentTheme || DefaultConfigContext.theme);

    const changeCurrentTheme = (newTheme: ColorThemes) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() => {
        if (theme === ColorThemes.LIGHT) {
            document.documentElement.classList.remove(ColorThemes.DARK);
            document.documentElement.classList.add(ColorThemes.LIGHT);
        } else {
            document.documentElement.classList.remove(ColorThemes.LIGHT);
            document.documentElement.classList.add(ColorThemes.DARK);
        }
    }, [theme])

    return (
        <ctx.Provider value={{
            theme: theme,
            setTheme: changeCurrentTheme
        }}>
            {children}
        </ctx.Provider>
    )
}