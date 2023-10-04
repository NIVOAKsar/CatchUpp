import React, { useState } from 'react';

import styles from './MainAvatar.module.scss';

MainAvatar.defaultProps = {
    src: null,
    size: 32
};

function MainAvatar(props) {
    const [showImage, setShowImage] = useState(false);
    const [renderImage, setRenderImage] = useState(true);

    function onLoad() {
        setShowImage(() => true);
    }

    function onError() {
        setRenderImage(() => false);
    }

    function stylesContainer() {
        return {
            width: props.size + 'px',
            height: props.size + 'px'
        };
    }

    function classesContainer() {
        return `${styles['main-avatar']} ${props.className}`;
    }

    function classesImage() {
        return `${styles['fade-in']} ${!showImage && styles.hidden}`;
    }

    return (
        <div className={classesContainer()} style={stylesContainer()}>
            {renderImage && (
                <img
                    src={props.src}
                    onLoad={onLoad}
                    onError={onError}
                    className={classesImage()}
                />
            )}
        </div>
    );
}

export default MainAvatar;
