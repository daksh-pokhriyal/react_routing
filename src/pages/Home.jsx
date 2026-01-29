import "./Home.css";
import { useNavigate } from "react-router-dom";





const Home = () => {
    const navigate = useNavigate();
    return (

        <section className="home">
            <div className="hero">
                <h1>Hi, I’m Daksh Pokhriyal</h1>
                <h2>Aspiring Machine Learning and AI developer</h2>

                <p>
                    I build modern web experiences using
                    React, Firebase, and Machine Learning.
                </p>

                <button
                    className="btn"
                    onClick={() => navigate("/projects")}
                >
                    View My Projects
                </button>


            <a href="/resume.pdf" download>
                <button className="btn" style={{marginLeft: "10px" }}>
                    Download Resume
                </button>
            </a>

            </div>

            
        </section>
    );
};

export default Home;
