import LikesAndHeart from '../likes_and_heart/LikesAndHeart';
import { useEffect, useState } from 'react';
import LikesAndPrice from '../likes_and_price/LikesAndPrice';
import LightBoxMedia from '../lightbox/LightBoxMedia';
import MediaRender from '../lightbox/MediaRender';
import UseScreenWidth from '../../utils/useScreenWidth';
import './GalleryPhotographer.css';

export default function GalleryPhotographer({ photographer, imagesPhotographer }) {
  const host = window.location.host;
  const widthScreen = UseScreenWidth();
  const [photographerLikes, setPhotographerLikes] = useState(0);
  const [openLightBox, setOpenLightBox] = useState(false);
  const [imageForLightBox, setImageForLightBox] = useState({});

  const handleCountLikes = (count) => {
    setPhotographerLikes(prevState => prevState + count);
  };

  const handleOpenLightBox = (image) => {
    setOpenLightBox(prevState => !prevState);
    setImageForLightBox(image);
  };

  useEffect(() => {
    let totalLikes = 0;
    imagesPhotographer.map(img => {
      totalLikes = totalLikes + img.likes;
    });
    setPhotographerLikes(totalLikes);
  }, [imagesPhotographer, photographer]);

  return (
    <>
      <section>
        <header>
          Trier par button
        </header>

        {!openLightBox ?
          <div className='Photographer_Gallery'>
            {imagesPhotographer && imagesPhotographer.map((image, index) => {
              return (
                <div key={`media-${index}`}>
                  <div onClick={e => handleOpenLightBox(image)}>
                    <MediaRender host={host} widthScreen={widthScreen} photographerId={photographer.id} image={image}
                                 alt={'alt'} />
                  </div>
                  <div className='Photographer_Gallery_Info'>
                    <div>{image.title}</div>
                    <LikesAndHeart likes={image.likes} countLikes={count => handleCountLikes(count)} />
                  </div>
                </div>
              );
            })}
          </div>
          :
          <LightBoxMedia host={host} widthScreen={widthScreen} photographerId={photographer.id} image={imageForLightBox}
                         imagesPhotographer={imagesPhotographer} closeLightBox={e => handleOpenLightBox(e)} />}

      </section>
      {!openLightBox && <LikesAndPrice likes={photographerLikes} price={photographer.price} />}
    </>
  );
}
