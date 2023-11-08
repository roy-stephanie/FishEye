import LikesAndHeart from '../likes_and_heart/LikesAndHeart';
import './GalleryPhotographer.css';
import { useEffect, useState } from 'react';
import LikesAndPrice from '../likes_and_price/LikesAndPrice';
import GalleryImage from '../gallery_image/GalleryImage';
import GalleryVideo from '../gallery_video/GalleryVideo';
import LightBoxMedia from '../lightbox/LightBoxMedia';

export default function GalleryPhotographer({ photographer, imagesPhotographer }) {
  const host = window.location.host;
  const [photographerLikes, setPhotographerLikes] = useState(0);
  const [openLightBox, setOpenLightBox] = useState(false);
  const [imageForLightBox, setImageForLightBox] = useState({})

  const handleCountLikes = (count) => {
    setPhotographerLikes(prevState => prevState + count);
  };

  const handleOpenLightBox = (image) => {
    setOpenLightBox(prevState => !prevState);
    setImageForLightBox(image.target);
  };

  useEffect(() => {
    let totalLikes = 0;
    imagesPhotographer.map(img => {
      totalLikes = totalLikes + img.likes;
    });
    setPhotographerLikes(totalLikes);
  }, [imagesPhotographer]);

  return (
    <>
      <section className='GalleryPhotographer'>
        <header>
          Trier par button
        </header>

        {!openLightBox ?
          <div className='GalleryPhotographer_Gallery'>
            {imagesPhotographer && imagesPhotographer.map((image, index) => {
              return (
                <div key={`${index}`}>
                  <div onClick={e => handleOpenLightBox(e)}>
                    {image.image &&
                      <GalleryImage host={host} photographerId={photographer.id} image={image} />
                    }
                    {image.video &&
                      <GalleryVideo host={host} photographerId={photographer.id} video={image.video} />
                    }
                  </div>
                  <div className='GalleryPhotographer_Gallery_Content'>
                    <div>{image.title}</div>
                    <LikesAndHeart likes={image.likes} countLikes={count => handleCountLikes(count)} />
                  </div>
                </div>
              );
            })}
          </div>
          : <LightBoxMedia image={imageForLightBox} imagesPhotographer={imagesPhotographer} closeLightBox={e => handleOpenLightBox(e)} />}

      </section>
      <LikesAndPrice likes={photographerLikes} price={photographer.price} />
    </>
  );
}
