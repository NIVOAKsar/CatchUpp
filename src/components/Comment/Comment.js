import React from 'react';

import styles from './Comment.module.scss';

import MainAvatar from 'src/components/MainAvatar/MainAvatar';
import PostActions from 'src/components/PostActions/PostActions';

Comment.defaultProps = {
  avatar: 'https://via.placeholder.com/32',
  author: 'Author',
  content: null
};

function Comment(props) {
  return (
    <section className={`${styles.comment} ${props.className}`}>
      <div className={styles.comment__header}>
        <MainAvatar src={props.avatar} size={32} className="mr-md" />
        <div className={styles.comment__body}>
          <div className={`${styles.comment__header__texts} mb-md`}>
            <p className={`${styles.comment__header__name} roboto-bold`}>
              {props.author}
            </p>
            <p className={styles.comment__content}>
              ble all without say spirits shy clothes morning. Frankness in
              extensive to belonging improving
            </p>
          </div>
          <PostActions disableShare />
        </div>
      </div>
    </section>
  );
}

export default Comment;
