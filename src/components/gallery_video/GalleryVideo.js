import './GalleryVideo.css';

export default function GalleryVideo({ widthScreen, videoControl, videoResize, photographerId, video }) {
  const videoStyle = {
    height: videoResize ? `${widthScreen / 4.5}px` : '100%',
  };

  if (videoControl) {
    return (
      <div className='GalleryVideo'>
        <video controls style={videoStyle}>
          <source src={`/images/photographers/${photographerId}/${video}`} type='video/mp4' />
        </video>
      </div>
    );
  } else {
    return (
      <div className='GalleryVideo'>
        <video style={videoStyle}>
          <source src={`/images/photographers/${photographerId}/${video}`} type='video/mp4' />
        </video>
      </div>
    );
  }
}
