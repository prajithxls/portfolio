// import React, { useEffect, useRef } from 'react';
// // import spaceship from '../assets/spaceship.png'; // use a small spaceship image or emoji 🛸

// const SpaceshipScroll = () => {
//   const shipRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const scrollPercent = scrollTop / docHeight;

//       const ship = shipRef.current;
//       if (ship) {
//         const top = scrollPercent * (window.innerHeight - 60);
//         ship.style.transform = `translateY(${top}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="fixed right-3 top-0 z-50 h-full w-10 flex items-start justify-center pointer-events-none">
//       <div
//   ref={shipRef}
//   className="text-2xl animate-bounce"
// >
//   🚀
// </div>

//     </div>
//   );
// };

// export default SpaceshipScroll;
