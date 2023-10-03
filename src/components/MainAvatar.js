import React, { useState } from 'react'

import styles from './MainAvatar.module.scss'

MainAvatar.defaultProps = {
    src: null,
    size: 32
}

function MainAvatar(props) {
    const [showImage, setShowImage] = useState(false)

    function onLoad() {
        setShowImage(() => true)
    }

    function stylesContainer() {
        return {
            width: props.size + 'px',
            height: props.size + 'px'
        }
    }

    function classesContainer() {
        return `${styles['main-avatar']} ${props.className}`
    }

    function classesImage() {
        return `${styles['fade-in']} ${!showImage && styles.hidden}`
    }

    return (
        <div className={classesContainer()} style={stylesContainer()} >
            <img src={props.src} onLoad={onLoad} className={classesImage()} />
        </div>
    )
}

export default MainAvatar