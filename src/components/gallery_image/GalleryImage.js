import './GalleryImage.css';

export default function GalleryImage({ host, photographerId, image }) {
  return (
    <div className='GalleryImage'>
      <img src={`http://${host}/images/photographers/${photographerId}/${image.image}`} id={image.id} alt='' />
    </div>
  );
}
