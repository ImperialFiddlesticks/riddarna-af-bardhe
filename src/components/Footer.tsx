import { Link } from "@tanstack/react-router";
export function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <h3>Om oss</h3>
        <ul>
          <Link to="/evenemang">
            <li>Evenemang</li>
          </Link>
          <Link to="/föreningen">
            <li>Föreningen</li>
          </Link>
          <Link to="/kalender">
            <li>Kalender</li>
          </Link>
        </ul>
      </div>
      <img alt="shield logo" src="/bardhelogo.png" className="header-logo" />
      <div className="footer-section">
        <h3>Kontakta Oss</h3>
        <ul>
          <Link
            to="https://www.facebook.com/bardhe.se"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Facebook</li>
          </Link>
          <Link
            to="https://www.instagram.com/riddarna_af_bardhe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Instagram</li>
          </Link>
          <Link to="/kontakt">
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
