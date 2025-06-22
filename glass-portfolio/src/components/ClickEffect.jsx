import React, { useEffect } from 'react';

const ClickEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'click-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600); // remove after animationa
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ClickEffect;
