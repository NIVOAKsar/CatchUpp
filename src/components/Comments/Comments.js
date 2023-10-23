import React from 'react';

import styles from './Comments.module.scss';
import { cn } from 'src/utils/merge-css';

import Comment from 'src/components/Comment';

Comments.defaultProps = {};

function Comments(props) {
  function classesContiner() {
    return cn(styles.post__comments, props.className);
  }

  return (
    <section className={classesContiner()}>
      {/* Comments ... {printObject(props.comments)} */}

      <Comment className="mb-md" />
      {/* <Comment className="mb-md" /> */}
      {/* <Comment className="mb-md" /> */}
    </section>
  );
}

export default Comments;
