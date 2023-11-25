import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [active, setActive] = useState(true);
  const host = window.location.host;
  const location = useLocation();

  const handleActive = () => {
    setActive(!active);
  }

  return (
    <ul className='Nav'>
      <li>
        <NavLink to='/' onClick={handleActive} aria-label={'Logo FishEye'} tabIndex={1}>
          <img className='Nav_Logo' src={`http://${host}/images/logo.png`} alt='Logo FishEye' />
        </NavLink>
      </li>
      {location.pathname === '/' ? <li>Nos photographes</li> : <li></li>}
    </ul>
  );
}
