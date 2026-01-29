import "./Footer.css";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {year} Daksh Pokhriyal</p>

      <div className="footer-links">
        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">LinkedIn</a>
        <a href="#" target="_blank">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
