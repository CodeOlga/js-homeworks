const Main = () => {
  return (
    <div className="container">
      <h1 className="text-primary my-3">About Me</h1>
      <h2>Olga Kryvutsenko</h2>
      <p>Junior Frontend Developer</p>
      <p>
        Hello, I&apos;m Olga, and I&apos;m studying web development. I&apos;m
        passionate about creating modern websites and learning new technologies.
        Currently, I&apos;m exploring React and building projects to improve my
        skills.
      </p>

      <section className="tech-skills">
        <h2>Tech Skills</h2>
        <ul>
          <li>HTML5/CSS3</li>
          <li>Vanilla JavaScript</li>
          <li>React, Redux</li>
          <li>Responsive/Adaptive Design</li>
          <li>GIT/GitHub</li>
          <li>REST API</li>
          <li>Webpack, Vite</li>
        </ul>
      </section>

      <section className="soft-skills">
        <h2>Soft Skills</h2>
        <ul>
          <li>Effective Communication</li>
          <li>Problem-Solving Abilities</li>
          <li>Strong Time Management</li>
          <li>Collaborative Team Player</li>
          <li>Adaptability to New Technologies</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Todo List</h3>
            <p>HTML, CSS, React, Vite, Git</p>
          </li>
          <li>
            <h3>SWAPI</h3>
            <p>HTML, CSS, React, API, Vite, Git</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
