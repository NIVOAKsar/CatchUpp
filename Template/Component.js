import React from 'react';

import styles from './Component.module.scss';
import { cn } from 'src/utils/merge-css';

Component.defaultProps = {};

function Component(props) {
  function containerClasses() {
    return cn(styles.container);
  }

  return <div className={containerClasses()}></div>;
}

export default Component;
