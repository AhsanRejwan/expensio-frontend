import React from 'react';

type TopbarItemProps = {
    children: React.ReactNode;
}

export const TopbarButton = (props: TopbarItemProps) => {
    return (
        <button
            className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3`}
        >
            {props.children}
        </button>
    );
};