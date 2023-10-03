import React from 'react'

import styles from './PostActions.module.scss'
import ActionLike from '../assets/action-like.svg'
import ActionComment from '../assets/action-comment.svg'
import ActionShare from '../assets/action-share.svg'

PostActions.defaultProps = {
    disableLike: false,
    disableComment: false,
    disableShare: false
}

function PostActions(props) {
    return (
        <div className={styles.post__actions}>
            {!props.disableLike && <button className={styles.post__actions__item}>
                <img className={styles.post__actions__icon} src={ActionLike} />
                <span>Like</span>
            </button>}
            {!props.disableComment && <button className={styles.post__actions__item}>
                <img className={styles.post__actions__icon} src={ActionComment} />
                <span>Comment</span>
            </button>}
            {!props.disableShare && <button className={styles.post__actions__item}>
                <img className={styles.post__actions__icon} src={ActionShare} />
                <span>Share</span>
            </button>}
        </div>
    )
}

export default PostActions