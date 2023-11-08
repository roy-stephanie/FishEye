import { createElement } from 'react';
import './LightboxRender.css';

export default function LightboxRender({ image, alt }) {

  return createElement(
    'div',
    {
      style: {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        minWidth: '100%',
        height: 'auto',
      },
      className: 'LightboxRender',
    },
  );
}
