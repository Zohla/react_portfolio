import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <ul className="Footer-list">
          <a href="#cards-container" className="Nav-item">
            <li>Projects</li>
          </a>
          <a href="#About" className="Nav-item">
            <li>About</li>
          </a>
          <a href="#Contact" className="Nav-item">
            <li>Contact</li>
          </a>
        </ul>
        <p className="Copyright">&copy; Maren Lilleberre 2022</p>
        <ul className="Footer-list" id="Socials">
          <a
            href="https://twitter.com/MarenLilleberre"
            target="_blank"
            rel="noreferrer"
          >
            <li>Twitter</li>
          </a>
          <a
            href="https://www.linkedin.com/in/maren-lilleberre-117406188/"
            target="_blank"
            rel="noreferrer"
          >
            <li>LinkedIn</li>
          </a>
          <a href="https://github.com/Zohla" target="_blank" rel="noreferrer">
            <li>GitHub</li>
          </a>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
