import React from 'react';
import {Menu} from "@headlessui/react";
import {Icon} from "../shared/ui/Icon";
import {useConfigContext} from "../contexts/ConfigContext";
import {ColorThemes} from "../models/enums/ColorThemes";

const Items = [
    {
        label: "Portfolio",
        link: "www.google.com"
    },
    {
        label: "Moderation",
        link: "www.google.com"
    },
    {
        label: "Settings",
        link: "www.google.com"
    }
]

type TopbarProfileMenuProps = {};

export const TopbarProfileMenu = (props: TopbarProfileMenuProps) => {
    const {theme, setTheme} = useConfigContext();

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex justify-center items-center">
                    <img className="w-8 h-8 rounded-full" src="https://picsum.photos/200/200" width="32" height="32"
                         alt="User"/>
                    <div className="flex items-center truncate">
                        <span
                            className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">Ahsan Rejwan Zaman</span>
                        <Icon iconName="arrow-down" className="w-3 h-3 ml-1"/>
                    </div>
                </Menu.Button>
            </div>

            <Menu.Items
                className="origin-top-right z-10 absolute top-full divide-y divide-slate-200 dark:divide-slate-700 min-w-44 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1">
                <Menu.Item>
                    {() => (
                        <div className="pt-2 pb-2 px-3 mb-1">
                            <div className="font-medium text-slate-800 dark:text-slate-100">Ahsan Rejwan Zaman</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 italic">Administrator</div>
                        </div>
                    )}
                </Menu.Item>
                <div>
                    {
                        Items.map(menuItem => (
                            <Menu.Item key={menuItem.label}>
                                {
                                    () => (
                                        <a className="py-2 font-medium text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-600/80 flex items-center py-1 px-3"
                                           href={menuItem.link}>{menuItem.label}</a>
                                    )
                                }
                            </Menu.Item>
                        ))
                    }
                    <Menu.Item>
                        {
                            () => (
                                <button
                                    onClick={() => setTheme(theme === ColorThemes.LIGHT ? ColorThemes.DARK : ColorThemes.LIGHT)}
                                    className=" w-full font-medium text-sm text-indigo-500 hover:text-indigo-600 hover:bg-slate-200 dark:hover:bg-slate-600/80 dark:hover:text-indigo-400 flex items-center py-1 px-3">
                                    <span>{theme === ColorThemes.LIGHT ? 'Dark Mode' : 'Light Mode'}</span>
                                    <span
                                        className="ml-2 flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full">
                                        <Icon iconName={theme === ColorThemes.LIGHT ? 'moonlight' : 'daylight'}
                                              className="w-4 h-4"/>
                                    </span>
                                </button>
                            )
                        }
                    </Menu.Item>
                </div>
            </Menu.Items>

        </Menu>
    );
};