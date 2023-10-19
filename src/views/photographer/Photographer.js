import RenderPhotographer from '../../components/render_photographer/RenderPhotographer';
import { useParams } from 'react-router-dom';
import './Photographer.css';

export default function Photographer() {
  const { id } = useParams();

  return (
    <section className='Photographer'>
      <RenderPhotographer id={id} />
    </section>
  );
}
