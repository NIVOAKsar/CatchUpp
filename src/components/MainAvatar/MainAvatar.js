import React, { useState } from 'react';

import styles from './MainAvatar.module.scss';

import BaseImage from 'src/components/brand/BaseImage';

MainAvatar.defaultProps = {
  src: null,
  size: 32,
  onLoad: null,
  onError: null
};

function MainAvatar(props) {
  function classesContainer() {
    return `${styles['main-avatar']} ${props.className}`;
  }

  return (
    <BaseImage
      width={props.size}
      src={props.src}
      useAspectRatio
      className={classesContainer()}
      onLoad={props.onLoad}
      onError={props.onError}
    ></BaseImage>
  );
}

export default MainAvatar;
