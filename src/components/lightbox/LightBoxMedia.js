import { useEffect, useState } from 'react';
import MediaRender from './MediaRender';
import left from './img/left.png';
import right from './img/right.png';
import close from './img/close.png';
import './LightBoxMedia.css';

export default function LightBoxMedia({ host, widthScreen, photographerId, image, imagesPhotographer, closeLightBox }) {
  const [current, setCurrent] = useState(imagesPhotographer.findIndex(e => e.id === image.id));
  const [imagesPhotographerLength, setImagesPhotographerLength] = useState(imagesPhotographer.length);

  useEffect(() => {
    console.log(current);
  }, [current]);

  const slideRight = () => {
    setCurrent(current === imagesPhotographerLength - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? imagesPhotographerLength - 1 : current - 1);
  };

  return (
    <div className='Lightbox'>
      <div>
        <div className='LightboxLeft' onClick={slideLeft}>
          <img src={left} alt='Image de Gauche' />
        </div>
        <MediaRender host={host} widthScreen={widthScreen} videoControl={true} videoResize={false} photographerId={photographerId} image={imagesPhotographer[current]} alt={'alt'} />
        <div className='LightboxRight' onClick={slideRight}>
          <div className='LightboxClose' onClick={() => closeLightBox()}>
            <img src={close} alt='Close LightBox' />
          </div>
          <img src={right} alt='Image de Droite' />
        </div>
      </div>
    </div>
  );
}
