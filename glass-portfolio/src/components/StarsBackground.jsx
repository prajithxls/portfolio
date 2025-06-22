import React, { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let stars = [];
    let comets = [];

    const STAR_COUNT = 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        speed: Math.random() * 0.7 + 0.5,
      }));
    };

    const spawnComet = () => {
      // 🚫 Limit number of active comets
      if (comets.length >= 2) return;

      const y = Math.random() * canvas.height;

      // 🔴 20% chance to be red comet
      const isRed = Math.random() < 0.2;

      comets.push({
        x: 0,
        y,
        vx: Math.random() * 2.5 + 2,
        vy: Math.random() * 1 - 0.5,
        length: 70,
        opacity: 1,
        color: isRed ? 'red' : 'white',
      });
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ⭐ Stars
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        star.x += star.speed;
        if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ☄️ Comets
      comets.forEach((comet, i) => {
        const baseColor = comet.color === 'red' ? '255, 60, 60' : '255, 255, 255';

        // Tail
        const gradient = ctx.createLinearGradient(
          comet.x, comet.y,
          comet.x - comet.vx * comet.length,
          comet.y - comet.vy * comet.length
        );
        gradient.addColorStop(0, `rgba(${baseColor}, ${comet.opacity})`);
        gradient.addColorStop(1, `rgba(${baseColor}, 0)`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.vx * comet.length, comet.y - comet.vy * comet.length);
        ctx.stroke();

        // Head
        ctx.beginPath();
        ctx.fillStyle = `rgba(${baseColor}, ${comet.opacity})`;
        ctx.shadowColor = `rgba(${baseColor}, ${comet.opacity})`;
        ctx.shadowBlur = 15;
        ctx.arc(comet.x, comet.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move
        comet.x += comet.vx;
        comet.y += comet.vy;

        if (comet.x > canvas.width * 0.8) {
          comet.opacity -= 0.008;
        }

        if (comet.opacity <= 0 || comet.x > canvas.width + 100) {
          comets.splice(i, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    resize();
    initStars();
    draw();

    // 🕒 Spawn comet every 3 seconds
    const cometInterval = setInterval(spawnComet, 3000);

    window.addEventListener('resize', () => {
      resize();
      initStars();
    });

    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(cometInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ background: '#000' }}
    />
  );
};

export default StarsBackground;
