import React from 'react';

import styles from './Component.module.scss';
import { cn } from 'src/utils/merge-css';

Component.defaultProps = {};

function Component(props) {
    return <div className={styles.container}></div>;
}

export default Component;
