import "./About.css";

const About = () => {
  return (
    <section className="about page">
      <h1>About Me</h1>

      <p className="about-intro">
        I am a developer focused on AI, Machine Learning, and modern web
        applications. I enjoy building practical systems and clean user
        interfaces using React and Firebase.
      </p>

      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill">React</div>
        <div className="skill">Firebase</div>
        <div className="skill">Machine Learning</div>
        <div className="skill">Python</div>
        <div className="skill">C++</div>
        <div className="skill">APIs</div>
      </div>
    </section>
  );
};

export default About;
