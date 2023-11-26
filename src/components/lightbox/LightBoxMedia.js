import { useEffect, useState } from 'react';
import MediaRender from './MediaRender';
import left from './img/left.png';
import right from './img/right.png';
import close from './img/close.png';
import './LightBoxMedia.css';

export default function LightBoxMedia({ widthScreen, photographerId, image, imagesPhotographer, closeLightBox }) {
  const [current, setCurrent] = useState(imagesPhotographer.findIndex(e => e.id === image.id));
  const [imagesPhotographerLength, setImagesPhotographerLength] = useState(imagesPhotographer.length);

  const slideRight = () => {
    setCurrent(current === imagesPhotographerLength - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? imagesPhotographerLength - 1 : current - 1);
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        closeLightBox();
      } else if (event.key === 'ArrowLeft' || event.key === '4') {
        slideLeft();
      }else if (event.key === 'ArrowRight' || event.key === '6') {
        slideRight();
      }
    };

    // Ajoute un écouteur d'événement lorsque le composant est monté
    document.addEventListener('keydown', handleKey);

    // Nettoie l'écouteur d'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [current]);

  return (
    <div className='Lightbox'>
      <div>
        <div className='LightboxLeft' onClick={slideLeft}>
          <button><img src={left} alt='Image de Gauche' tabIndex={1} /></button>
        </div>
        <MediaRender widthScreen={widthScreen} videoControl={true} videoResize={false} photographerId={photographerId} image={imagesPhotographer[current]} alt={'alt'} />
        <div className='LightboxRight' onClick={slideRight}>
          <div className='LightboxClose' onClick={() => closeLightBox()}>
            <img src={close} alt='Close LightBox' />
          </div>
          <button><img src={right} alt='Image de Droite' tabIndex={2} /></button>
        </div>
      </div>
    </div>
  );
}
