const Skills = () => {
  return (
    <section id="skills" className="h-screen flex flex-col items-center justify-center px-6 text-white">
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
        <span>React</span>
        <span>JavaScript</span>
        <span>Python</span>
        <span>Tailwind CSS</span>
        <span>C# / .NET</span>
        <span>SQL</span>
      </div>
    </section>
  );
};
export default Skills;