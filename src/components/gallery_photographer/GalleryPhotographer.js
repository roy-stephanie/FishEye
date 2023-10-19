import './GalleryPhotographer.css';
import Heart from '../heart/Heart';

export default function GalleryPhotographer({ photographer, imagesPhotographer }) {
  const host = window.location.host;

  const handleHeartClick = (id) => {
    //const likes = imagesLikes.find(image => image.imageId === id);
    //console.log(likes);
  };

  return (
    <section className='GalleryPhotographer'>
      <header>
        Trier par button
      </header>
      <div className='GalleryPhotographer_Gallery'>
        {imagesPhotographer ? imagesPhotographer.map((image, index) => {
          return (
            <div key={`${index}`}>
              <div>
                <img src={`http://${host}/images/photographers/${photographer.id}/${image.image}`} alt='' />
              </div>
              <div className='GalleryPhotographer_Gallery_Content'>
                <div>{image.title}</div>
                <div>
                  <div>{image.likes}</div>
                  <Heart />
                </div>
              </div>
            </div>
          );
        }) : <div>Loading ...</div>}
      </div>
    </section>
  );
}
