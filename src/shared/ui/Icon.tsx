import React from 'react';

type IconsProps = {
    iconName: ICON_NAMES,
    className?: string
};

export type ICON_NAMES = 'search' | 'arrow-down' | 'messages' | 'daylight' | 'moonlight'

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
        case ('daylight'):
            return <svg className={className} width="16" height="16"
                        xmlns="http://www.w3.org/2000/svg">
                <path
                    className="fill-current text-slate-400"
                    d="M7 0h2v2H7V0Zm5.88 1.637 1.414 1.415-1.415 1.413-1.414-1.414 1.415-1.414ZM14 7h2v2h-2V7Zm-1.05 7.433-1.415-1.414 1.414-1.414 1.415 1.413-1.414 1.415ZM7 14h2v2H7v-2Zm-4.02.363L1.566 12.95l1.415-1.414 1.414 1.415-1.415 1.413ZM0 7h2v2H0V7Zm3.05-5.293L4.465 3.12 3.05 4.535 1.636 3.121 3.05 1.707Z"
                />
                <path className="fill-current text-slate-500"
                      d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"/>
            </svg>
        case ('moonlight'):
            return <svg className={className} width="16" height="16"
                        xmlns="http://www.w3.org/2000/svg">
                <path
                    className="fill-current text-slate-400"
                    d="M6.2 2C3.2 2.8 1 5.6 1 8.9 1 12.8 4.2 16 8.1 16c3.3 0 6-2.2 6.9-5.2C9.7 12.2 4.8 7.3 6.2 2Z"
                />
                <path
                    className="fill-current text-slate-500"
                    d="M12.5 6a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 6Z"
                />
            </svg>
        default :
            return <></>
    }
}
export const Icon = (props: IconsProps) => {
    const {iconName, className = ''} = props
    return ICON(iconName, className);
};