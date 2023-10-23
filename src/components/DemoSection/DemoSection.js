import React from 'react';

import styles from './DemoSection.module.scss';
import { cn } from 'src/utils/merge-css';

DemoSection.defaultProps = {};

function DemoSection({ title, children }) {
  function containerClasses() {
    return cn('mb-md');
  }

  return (
    <section className={containerClasses()}>
      <h3 className="mb-3 underline">{title}</h3>
      {children}
    </section>
  );
}

export default DemoSection;
