import React from 'react';

import styles from './PostActions.module.scss';
import { cn } from 'src/utils/merge-css';

import ActionLike from 'src/assets/action-like.svg';
import ActionComment from 'src/assets/action-comment.svg';
import ActionShare from 'src/assets/action-share.svg';

import ActionButton from 'src/components/brand/ActionButton';

PostActions.defaultProps = {
    disableLike: false,
    disableComment: false,
    disableShare: false
};

function PostActions(props) {
    function classesContainer() {
        return cn(styles.post__actions, props.className);
    }

    return (
        <div className={classesContainer()}>
            {!props.disableLike && (
                <ActionButton label="Like" src={ActionLike} />
            )}
            {!props.disableComment && (
                <ActionButton label="Comment" src={ActionComment} />
            )}
            {!props.disableShare && (
                <ActionButton label="Share" src={ActionShare} />
            )}
        </div>
    );
}

export default PostActions;
