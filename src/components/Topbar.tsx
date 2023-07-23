import React from 'react';
import {TopbarButton} from "./TopbarButton";
import {Icon} from "../shared/ui/Icon";
import {TopbarProfileMenu} from "./TopbarProfileMenu";


export const Topbar = () => {
    return (
        <header
            className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
            <div className="px-4 sm:px-6 lg:px-8 py-1 sm:py-2 lg:py-4">
                <div className="flex items-center justify-end">
                    <TopbarButton>
                        <span className="sr-only">Search</span>
                        <Icon iconName="search" className="w-4 h-4" />
                    </TopbarButton>
                    <TopbarButton>
                        <span className="sr-only">Search</span>
                        <Icon iconName="messages" className="w-4 h-4" />
                    </TopbarButton>
                    <hr className="mx-3 w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
                    <TopbarProfileMenu />
                </div>
            </div>
        </header>
    );
};
