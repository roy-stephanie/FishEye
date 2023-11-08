import './LightBoxMedia.css';
import { useEffect, useState } from 'react';
import LightboxRender from './LightboxRender';
import left from './img/left.png';
import right from './img/right.png';
import close from './img/close.png';

export default function LightBoxMedia({ image, imagesPhotographer, closeLightBox }) {
  const host = window.location.host;
  const idImages = parseInt(image.id);
  const [indexImage, setIndexImage] = useState(0);
  const [imagesPhotographerLength, setImagesPhotographerLength] = useState(imagesPhotographer.length);

  useEffect(() => {
    console.log(imagesPhotographer.length);
    const isIndex = e => e.id === idImages;
    const searchIndexImage = imagesPhotographer.findIndex(isIndex);


    console.log(searchIndexImage);
    console.log(imagesPhotographer);
  }, [imagesPhotographer, idImages]);

  return (
    <div className='Lightbox'>
      <div>
        <div className='LightboxLeft'>
          <img src={left} alt='Image de Gauche' />
        </div>
        <LightboxRender image={image.currentSrc} alt={'alt'} />
        <div className='LightboxRight'>
          <div className='LightboxClose' onClick={() => closeLightBox(image)}>
            <img src={close} alt='Close LightBox' />
          </div>
          <img src={right} alt='Image de Droite' />
        </div>
      </div>
    </div>
  );
}
