    function App() {
  return (
    <>
      {/* 🎨 Light glow gradient background */}
      <LightGradient
        intensity={0.8}         // control brightness
        size="large"            // small / medium / large / xlarge
        animated={true}         // pulsating glow
        position="left"         // top / bottom / left / right / center
        color="teal"            // try "purple", "blue", etc.
      />

      <StarsBackground />
      <ClickParticles />

      <div className="relative z-10">
        <Navbar />
        <main className="pt-20">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
