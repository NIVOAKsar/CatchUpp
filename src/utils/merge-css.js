import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// explenation: https://www.youtube.com/watch?v=re2JFITR7TI
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
