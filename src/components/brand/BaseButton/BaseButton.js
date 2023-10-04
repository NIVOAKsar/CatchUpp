import React from 'react';
import { cn } from 'src/utils/merge-css';

import styles from './BaseButton.module.scss';

BaseButton.defaultProps = {
    onClick: null,
    content: null
};

function BaseButton({ onClick, children, className }) {
    function classesContainer() {
        return cn(
            'bg-green-300 rounded px-2 py-1 hover:bg-green-400 active:bg-green-500 transition-hover cursor-pointer',
            styles['base-button'],
            className
        );
    }

    return (
        <button onClick={onClick} className={classesContainer()}>
            {children}
        </button>
    );
}

export default BaseButton;
