import React from 'react';

import styles from './ActionButton.module.scss';
import { cn } from 'src/utils/merge-css';

ActionButton.defaultProps = {
    src: null,
    label: null
};

function ActionButton(props) {
    function containerClasses() {
        return cn(styles['action-btn']);
    }

    return (
        <button className={containerClasses()}>
            <img className={styles['action-btn__icon']} src={props.src} />
            <span>{props.label}</span>
        </button>
    );
}

export default ActionButton;
