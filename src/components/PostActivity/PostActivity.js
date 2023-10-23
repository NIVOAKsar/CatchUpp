import React from 'react';

import styles from './PostActivity.module.scss';
import { cn } from 'src/utils/merge-css';

PostActivity.defaultProps = {
  likes: 0
};

function PostActivity(props) {
  function containerClasses() {
    return cn(styles.post__activity, props.className);
  }

  const renderLikes = () => {
    if (!props.likes) {
      return null;
    }

    return <div>{props.likes} Likes</div>;
  };

  // const drawLikes = () => {

  // }

  // const showLikes = () => {

  // }

  return <div className={containerClasses()}>{renderLikes()}</div>;
}

export default PostActivity;
