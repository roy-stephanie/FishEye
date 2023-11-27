import { useEffect, useState } from 'react';
import getPhotographers from '../../services/data/getPhotographers';
import HeaderPhotographer from '../header_photographer/HeaderPhotographer';
import GalleryPhotographer from '../gallery_photographer/GalleryPhotographer';
import './RenderPhotographer.css';

export default function RenderPhotographer({ id }) {
  const [photographer, setPhotographer] = useState({});
  const [imagesPhotographer, setImagesPhotographer] = useState([]);

  const fetchPhotographer = () => {
    const loadPhotographer = async () => {
      const data = await getPhotographers();

      const filterPhotographer = data.photographers.filter(p => p.id === parseInt(id));
      const dataImagesPhotographer = data.media.filter(p => p.photographerId === parseInt(id));
      const dataPhotographer = filterPhotographer[0];

      setImagesPhotographer(dataImagesPhotographer);
      setPhotographer(dataPhotographer);
    };
    loadPhotographer().then();
  };

  useEffect(() => {
    fetchPhotographer();
  }, []);

  return (
    <section className='RenderPhotographer'>
      {photographer ? <HeaderPhotographer photographer={photographer} />: <div>Aucun photographe sous cette ID !</div>}
      {photographer && <GalleryPhotographer photographer={photographer} imagesPhotographer={imagesPhotographer} />}
    </section>
  );
}
