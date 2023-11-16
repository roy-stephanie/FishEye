import { useEffect, useState } from 'react';
import getPhotographers from '../../services/data/getPhotographers';
import CardPhotographer from '../section_photographer/SectionPhotographer';
import './RenderPhotographers.css';

export default function RenderPhotographers() {
  const [photographers, setPhotographers] = useState([]);

  const fetchPhotographers = () => {
    const loadPhotographers = async () => {
      const data = await getPhotographers();
      setPhotographers(data.photographers);
    };
    loadPhotographers().then();
  };

  useEffect(() => {
    fetchPhotographers();
  }, []);

  return (
    <div className='ViewPhotographers'>
      {photographers.map((photographer, index) => {
        return (
          <CardPhotographer key={`${photographer.id}-${index}`} photographer={photographer} tabIndex={index} />
        );
      })}
    </div>
  );
}
