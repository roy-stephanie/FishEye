import { useEffect, useState } from 'react';
import './LikesAndHeart.css';
import Heart from '../heart/Heart';

export default function LikesAndHeart({ likes, countLikes }) {
  const [imageLikes, setImageLikes] = useState(likes);
  const [userLike, setUserLike] = useState(false);

  const handleLike = () => {
    if (userLike) {
      setImageLikes(imageLikes => imageLikes - 1);
      countLikes(-1);
      setUserLike(false);
    } else {
      setImageLikes(imageLikes => imageLikes + 1);
      countLikes(1);
      setUserLike(true);
    }
  }

  return (
    <div className='Heart_Gallery_Content_Info'>
      <div>{imageLikes}</div>
      <div className='Heart' onClick={handleLike}>
        <Heart fill={'#901C1C'} />
      </div>
    </div>
  )
}
