import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

//a class to combine classnames
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}