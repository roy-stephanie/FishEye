import LikesAndHeart from '../likes_and_heart/LikesAndHeart';
import { useEffect, useState } from 'react';
import LikesAndPrice from '../likes_and_price/LikesAndPrice';
import LightBoxMedia from '../lightbox/LightBoxMedia';
import MediaRender from '../lightbox/MediaRender';
import UseScreenWidth from '../../utils/useScreenWidth';
import SortImagesPhotographer from '../sort_images_photographer/sortImagesPhotographer';
import SortImages from '../../utils/sortImages';
import './GalleryPhotographer.css';

export default function GalleryPhotographer({ photographer, imagesPhotographer }) {
  const host = window.location.host;
  const widthScreen = UseScreenWidth();
  const [sortImagesPhotographer, setSortImagesPhotographer] = useState(imagesPhotographer);
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

  const handleSort = (sort) => {
    setSortImagesPhotographer(SortImages(imagesPhotographer, sort));
  }

  useEffect(() => {
    setSortImagesPhotographer(SortImages(imagesPhotographer, 'Popularité'));
    let totalLikes = 0;
    imagesPhotographer.map(img => {
      totalLikes = totalLikes + img.likes;
    });
    setPhotographerLikes(totalLikes);
  }, [imagesPhotographer, photographer]);

  return (
    <>
      <section className='Photographer_Gallery_Section'>
        <header>
          <div>
            <div>Trier par </div>
            <SortImagesPhotographer sort={handleSort} />
          </div>
        </header>
        {!openLightBox ?
          <div className='Photographer_Gallery'>
            {sortImagesPhotographer && sortImagesPhotographer.map((image, index) => {
              return (
                <div key={`media-${index}`}>
                  <button onClick={e => handleOpenLightBox(image)} tabIndex={index + 12}>
                    <MediaRender host={host} widthScreen={widthScreen} photographerId={photographer.id} image={image}
                                 objectFit={'cover'} alt={'alt'} />
                  </button>
                  <div className='Photographer_Gallery_Info'>
                    <div>{image.title}</div>
                    <LikesAndHeart likes={image.likes} countLikes={count => handleCountLikes(count)} />
                  </div>
                </div>
              );
            })}
          </div> :
          <LightBoxMedia host={host} widthScreen={widthScreen} photographerId={photographer.id} image={imageForLightBox}
                         imagesPhotographer={sortImagesPhotographer} closeLightBox={e => handleOpenLightBox(e)} />
        }
      </section>
      {!openLightBox && <LikesAndPrice likes={photographerLikes} price={photographer.price} />}
    </>
  );
}
