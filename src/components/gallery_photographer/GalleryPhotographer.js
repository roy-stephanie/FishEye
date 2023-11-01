import LikesAndHeart from '../likes_and_heart/LikesAndHeart';
import './GalleryPhotographer.css';
import { useEffect, useState } from 'react';
import LikesAndPrice from '../likes_and_price/LikesAndPrice';
import GalleryImage from '../gallery_image/GalleryImage';
import GalleryVideo from '../gallery_video/GalleryVideo';

export default function GalleryPhotographer({ photographer, imagesPhotographer }) {
  const host = window.location.host;
  const [photographerLikes, setPhotographerLikes] = useState(0);

  const handleCountLikes = (count) => {
    setPhotographerLikes(prevState => prevState + count);
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
        <div className='GalleryPhotographer_Gallery'>
          {imagesPhotographer && imagesPhotographer.map((image, index) => {
            return (
              <div key={`${index}`}>
                {image.image &&
                  <GalleryImage host={host} photographerId={photographer.id} image={image.image} />
                }
                {image.video &&
                  <GalleryVideo host={host} photographerId={photographer.id} video={image.video}/>
                }
                <div className='GalleryPhotographer_Gallery_Content'>
                  <div>{image.title}</div>
                  <LikesAndHeart likes={image.likes} countLikes={count => handleCountLikes(count)} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <LikesAndPrice likes={photographerLikes} price={photographer.price} />
    </>
  );
}
