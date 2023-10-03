import React from 'react'

import styles from './ContentSkeleton.module.scss'

ContentSkeleton.defaultProps = {
}

function ContentSkeleton(props) {

    function classesContainer() {
        return `${styles['content-skeleton']} ${props.className}`
    }

    return (
        <div className={classesContainer()}></div>
    )
}

export default ContentSkeleton