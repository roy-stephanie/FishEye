import './GalleryVideo.css';

export default function GalleryVideo({ host, widthScreen, videoControl, videoResize, photographerId, video }) {
  const videoStyle = {
    height: videoResize ? `${widthScreen / 4.5}px` : '100%',
  };

  if (videoControl) {
    return (
      <div className='GalleryVideo'>
        <video controls style={videoStyle}>
          <source src={`http://${host}/images/photographers/${photographerId}/${video}`} type='video/mp4' />
        </video>
      </div>
    );
  } else {
    return (
      <div className='GalleryVideo'>
        <video style={videoStyle}>
          <source src={`http://${host}/images/photographers/${photographerId}/${video}`} type='video/mp4' />
        </video>
      </div>
    );
  }
}
