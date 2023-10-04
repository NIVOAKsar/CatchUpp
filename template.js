import React from 'react';

import styles from './Component.module.scss';

Component.defaultProps = {};

function Component(props) {
    return <div className={styles.container}></div>;
}

export default Component;
