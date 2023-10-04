import React from 'react';

import styles from './PostHeader.module.scss';

import MainAvatar from 'src/components/MainAvatar';

PostHeader.defaultProps = {
    avatar: null,
    author: null,
    date: null
};

function PostHeader(props) {
    return (
        <section
            className={`${styles.post__header} ${styles['post-section']} ${props.className}`}
        >
            <MainAvatar src={props.avatar} size={40} className="mr-md" />
            <div className={styles.post__header__texts}>
                <p
                    className={`${styles.post__header__texts__name} roboto-bold`}
                >
                    {props.author}
                </p>
                <p className={styles.post__header__texts__time}>{props.date}</p>
            </div>
        </section>
    );
}

export default PostHeader;
