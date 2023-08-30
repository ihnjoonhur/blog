
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">featured</a>
        </li>
      </ul>
      <ul className="footer-icons">
      <li>
    <a href="https://www.linkedin.com/in/ihnjoon-hur-64b234260/" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <i className="fab fa-linkedin-in"></i>
    </a>
</li>

        <li>
          <a href="https://github.com/ihnjoonhur" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:ihnjoon.h@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <i class="fab fa-google"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">
        copyright &copy; IhnJoon Hur
        <span id="date">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
