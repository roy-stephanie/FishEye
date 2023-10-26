import './GalleryVideo.css';

export default function GalleryVideo({ host, photographerId, video }) {
  return (
    <div className='GalleryVideo'>
      <video controls>
        <source src={`http://${host}/images/photographers/${photographerId}/${video}`} type='video/mp4' />
      </video>
    </div>
  );
}
