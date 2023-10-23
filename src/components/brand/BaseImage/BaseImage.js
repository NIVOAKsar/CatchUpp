import React, { useState } from 'react';

import styles from './BaseImage.module.scss';

BaseImage.defaultProps = {
  width: 0,
  height: 0,
  src: null,
  aspectRatio: 1,
  onLoad: null,
  onError: null,
  useAspectRatio: false
};

function BaseImage(props) {
  const [renderImage, setRenderImage] = useState(true);
  const [showImage, setShowImage] = useState(false);

  function onLoad() {
    setShowImage(() => true);
    props.onLoad?.();
  }

  function onError() {
    setRenderImage(() => false);
    props.onError?.();
  }

  function withPxSuffix(value) {
    // Convert the input to a number if it's a string
    const number = parseFloat(value);

    // Check if the conversion was successful and it's a finite number
    if (!isNaN(number) && isFinite(number)) {
      return number + 'px';
    } else {
      // Return an error message if the input is not a valid number
      return '0px';
    }
  }

  function calcHeightRatio() {
    const widthParsed = parseFloat(props.width);
    const height = widthParsed / props.aspectRatio;

    return height || 0;
  }

  function classesContainer() {
    return `${styles['base-image']} ${props.className}`;
  }

  function classesImage() {
    return `${styles['fade-in']} ${!showImage && styles.hidden}`;
  }

  function stylesContainer() {
    const width = withPxSuffix(props.width);

    const height = withPxSuffix(
      props.useAspectRatio ? calcHeightRatio() : props.height
    );

    return { width, height };
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

export default BaseImage;
