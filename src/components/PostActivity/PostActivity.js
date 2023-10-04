import React from 'react';

import styles from './PostActivity.module.scss';

PostActivity.defaultProps = {
    likes: 0
};

function PostActivity(props) {
    const renderLikes = () => {
        if (!props.likes) {
            return null;
        }

        return <div>{props.likesAmount} Likes</div>;
    };

    // const drawLikes = () => {

    // }

    // const showLikes = () => {

    // }

    return <div className={styles.post__activity}>{renderLikes()}</div>;
}

export default PostActivity;
