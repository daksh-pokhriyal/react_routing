import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from "../assets/profile.jpg";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src={profile} alt="profile" />
        <span>Daksh Pokhriyal</span>
      </div>



      <nav className="nav-links">
        <Link to="/"> <b> Home</b></Link>
        <Link to="/about"> <b>About </b></Link>
        <Link to="/projects"> <b>Projects</b></Link>
        <Link to="/contact"> <b>Contact</b></Link>
      </nav>
    </header>
  );
};

export default Navbar;
