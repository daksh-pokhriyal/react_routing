import "./Projects.css";
import faceImg from "../assets/face_sorter.png";

const projectList = [
    {
        title: "Face Recognition Photo Sorter",
        desc: "AI system that detects and sorts photos by matching a target face.",
        link: "https://face-sorter.vercel.app",
        img: faceImg,
        github: "https://github.com/daksh-pokhriyal/FaceSorter"
    }

];

const Projects = () => {
    return (
        <section className="projects page">
            <h1>Projects</h1>

            <div className="project-grid">
                {projectList.map((p, i) => (
                    <div className="project-card" key={i}>
                        <img src={p.img} alt={p.title} className="project-img" />
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>

                        

                        <a href={p.link} target="_blank">
                            <button className="btn">
                                View Project
                            </button>
                        </a>

                        <a href={p.github} target="_blank" style={{ marginLeft: "10px" }}>
                            <button className="btn">GitHub</button>
                        </a>

                        


                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
