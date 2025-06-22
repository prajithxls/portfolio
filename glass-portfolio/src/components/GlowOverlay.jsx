const GlowOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[200px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)',
          top: '-100px',
          left: '-100px',
        }}
      />
    </div>
  );
};

export default GlowOverlay;
