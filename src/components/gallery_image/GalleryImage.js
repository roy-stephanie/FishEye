export default function GalleryImage({ host, photographerId, image }) {
  return (
    <div>
      <img src={`http://${host}/images/photographers/${photographerId}/${image}`} alt='' />
    </div>
  );
}
