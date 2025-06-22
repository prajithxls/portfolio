
import React, { useEffect } from 'react';

const ClickParticles = () => {
  useEffect(() => {
    const createExplosion = (x, y) => {
      const particles = 12;
      for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 30 + 20;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);

        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 500);
      }
    };

    const handleClick = (e) => {
      createExplosion(e.clientX, e.clientY);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default ClickParticles;
