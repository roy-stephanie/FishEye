import './LikesAndPrice.css';
import Heart from '../heart/Heart';

export default function LikesAndPrice({likes, price}) {
  return (
    <div className='LikesAndPrice'>
      <div>
        <div>{likes}</div>
        <div><Heart fill={'#000'} /></div>
      </div>
      <div>{new Intl.NumberFormat('fr-FR').format(price)}€ / Jour</div>
    </div>
  );
}
