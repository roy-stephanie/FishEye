import './FormButton.css';
import { useEffect, useState } from 'react';

export default function FormButton({photographer}) {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      <div className='FormButton' onClick={handleClick}>
        Contactez-moi
      </div>
      {state ?
        <div className='FormButton_Modal'>
          <svg onClick={handleClick} className='FormButton_Modal_Close' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white"/>
          </svg>
          <div className='FormButton_Modal_Content'>
            <div>Contactez-moi</div>
            <div>{photographer.name}</div>
          </div>
        </div>
        : ''}
    </>
  );
}
