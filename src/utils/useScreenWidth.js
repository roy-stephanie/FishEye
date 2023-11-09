import { useEffect, useState } from 'react';

export default function UseScreenWidth() {
  const [width, setWidth] = useState(0);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener('resize',
      handleWindowSizeChange);

    // Return a function from the effect
    // that removes the event listener
    return () => {
      window.removeEventListener(
        'resize', handleWindowSizeChange);
    };
  }, []);

  return width;
}
