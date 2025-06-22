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
        brightness: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        color: Math.random() < 0.1 ? (Math.random() < 0.5 ? 'blue' : 'orange') : 'white'
      }));
    };

    const spawnComet = () => {
      if (comets.length >= 2) return;

      const y = Math.random() * canvas.height;
      const isRed = Math.random() < 0.2;

      comets.push({
        x: 0,
        y,
        vx: Math.random() * 2 + 2.5,
        vy: Math.random() * 1 - 0.5,
        length: 100,
        opacity: 1,
        color: isRed ? 'red' : 'white',
        particles: []
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ⭐ Draw realistic stars with twinkling and colors
      stars.forEach((star) => {
        star.x += star.speed;
        if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }

        // Update twinkle animation
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        const currentBrightness = star.brightness * twinkle;

        // Add slight cross-shaped diffraction spikes for brighter stars
        if (star.radius > 0.8) {
          ctx.beginPath();
          ctx.strokeStyle = star.color === 'blue' ? `rgba(100, 150, 255, ${currentBrightness * 0.3})` :
                           star.color === 'orange' ? `rgba(255, 180, 100, ${currentBrightness * 0.3})` :
                           `rgba(255, 255, 255, ${currentBrightness * 0.3})`;
          ctx.lineWidth = 0.5;
          
          // Horizontal spike
          ctx.moveTo(star.x - star.radius * 3, star.y);
          ctx.lineTo(star.x + star.radius * 3, star.y);
          
          // Vertical spike
          ctx.moveTo(star.x, star.y - star.radius * 3);
          ctx.lineTo(star.x, star.y + star.radius * 3);
          ctx.stroke();
        }

        // Draw the star core with realistic colors
        ctx.beginPath();
        ctx.fillStyle = star.color === 'blue' ? `rgba(150, 200, 255, ${currentBrightness})` :
                       star.color === 'orange' ? `rgba(255, 200, 150, ${currentBrightness})` :
                       `rgba(255, 255, 255, ${currentBrightness})`;
        
        // Add glow effect for larger stars
        if (star.radius > 0.6) {
          ctx.shadowColor = star.color === 'blue' ? `rgba(100, 150, 255, ${currentBrightness * 0.8})` :
                           star.color === 'orange' ? `rgba(255, 180, 100, ${currentBrightness * 0.8})` :
                           `rgba(255, 255, 255, ${currentBrightness * 0.8})`;
          ctx.shadowBlur = star.radius * 3;
        }
        
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ☄️ Draw enhanced comets with detailed structure
      comets.forEach((comet, i) => {
        const baseColor = comet.color === 'red' ? '255, 60, 60' : '255, 255, 255';
        const coreColor = comet.color === 'red' ? '255, 120, 120' : '255, 255, 255';

        // Create multiple tail segments for more realistic look
        const segments = 8;
        for (let seg = 0; seg < segments; seg++) {
          const segmentRatio = seg / segments;
          const segmentLength = comet.length * (1 - segmentRatio * 0.3);
          const segmentWidth = 3 * (1 - segmentRatio * 0.7);
          
          const gradient = ctx.createLinearGradient(
            comet.x - comet.vx * segmentLength * segmentRatio,
            comet.y - comet.vy * segmentLength * segmentRatio,
            comet.x - comet.vx * segmentLength,
            comet.y - comet.vy * segmentLength
          );
          
          gradient.addColorStop(0, `rgba(${baseColor}, ${comet.opacity * (1 - segmentRatio * 0.5)})`);
          gradient.addColorStop(0.5, `rgba(${baseColor}, ${comet.opacity * 0.7 * (1 - segmentRatio)})`);
          gradient.addColorStop(1, `rgba(${baseColor}, 0)`);

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = segmentWidth;
          ctx.lineCap = 'round';
          ctx.moveTo(
            comet.x - comet.vx * segmentLength * segmentRatio,
            comet.y - comet.vy * segmentLength * segmentRatio
          );
          ctx.lineTo(
            comet.x - comet.vx * segmentLength,
            comet.y - comet.vy * segmentLength
          );
          ctx.stroke();
        }

        // Draw bright comet core with multiple layers
        // Outer glow
        ctx.beginPath();
        ctx.fillStyle = `rgba(${baseColor}, ${comet.opacity * 0.3})`;
        ctx.shadowColor = `rgba(${baseColor}, ${comet.opacity * 0.8})`;
        ctx.shadowBlur = 25;
        ctx.arc(comet.x, comet.y, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Middle layer
        ctx.beginPath();
        ctx.fillStyle = `rgba(${coreColor}, ${comet.opacity * 0.8})`;
        ctx.shadowBlur = 15;
        ctx.arc(comet.x, comet.y, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity})`;
        ctx.shadowBlur = 8;
        ctx.arc(comet.x, comet.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.shadowBlur = 0;

        // Add particle debris trail
        if (Math.random() < 0.3) {
          comet.particles.push({
            x: comet.x + (Math.random() - 0.5) * 10,
            y: comet.y + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            decay: Math.random() * 0.02 + 0.01
          });
        }

        // Draw and update particles
        comet.particles.forEach((particle, pi) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life -= particle.decay;
          
          if (particle.life > 0) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(${baseColor}, ${particle.life * comet.opacity * 0.5})`;
            ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
            ctx.fill();
          } else {
            comet.particles.splice(pi, 1);
          }
        });

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
      style={{ background: 'transparent' }}
    />
  );
};

export default StarsBackground;