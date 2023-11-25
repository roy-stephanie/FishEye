import { createElement, useEffect } from 'react';
import GalleryVideo from '../gallery_video/GalleryVideo';

export default function MediaRender(
  {
    host,
    widthScreen,
    videoControl = false,
    videoResize = true,
    photographerId,
    image,
    objectFit = 'contain',
    alt,
  },
) {
  const imageUrl = `http://${host}/images/photographers/${photographerId}/${image.image}`;

  let style = {
    backgroundSize: objectFit,
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    minHeight: `${widthScreen / 4.5}px`,
    cursor: 'pointer',
  };

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;

    if (img.naturalWidth > img.naturalHeight) {
      style = {
        ...style,
      };
    } else {
      style = {
        ...style,
      };
    }
  }, [image]);

  if (image.image) {
    return createElement(
      'div',
      {
        style: {
          ...style,
          backgroundImage: `url(${imageUrl})`,
        },
        alt: alt
      },
    );
  }

  if (image.video) {
    return createElement(
      'div',
      {
        style: {
          ...style,
        },
      },
      <GalleryVideo host={host} widthScreen={widthScreen} videoControl={videoControl} videoResize={videoResize}
                    photographerId={photographerId}
                    video={image.video} />,
    );
  }
}
