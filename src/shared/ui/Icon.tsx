import React from 'react';

type IconsProps = {
    iconName: ICON_NAMES,
    className?: string
};

export type ICON_NAMES = 'search' | 'arrow-down' | 'messages'

const ICON = (iconName: ICON_NAMES, className: string) => {
    switch (iconName) {
        case ('search'):
            return <svg className={className} viewBox="0 0 16 16">
                <path
                    className="fill-current text-slate-500 dark:text-slate-400"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                    className="fill-current text-slate-400 dark:text-slate-500"
                    d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
            </svg>
        case ('arrow-down'):
            return <svg className={`${className} shrink-0 fill-current text-slate-400`} viewBox="0 0 12 12">
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>
            </svg>
        case ('messages'):
            return <svg className={className} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current text-slate-500 dark:text-slate-400"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"/>
                <path className="fill-current text-slate-400 dark:text-slate-500"
                      d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"/>
            </svg>
        default :
            return <></>
    }
}
export const Icon = (props: IconsProps) => {
    const {iconName, className = ''} = props
    return ICON(iconName, className);
};