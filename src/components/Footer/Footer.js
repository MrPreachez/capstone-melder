import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <section className="footer__section">
      <div className="footer__container--limit">
        <div className="footer__contentWrap">
          <div className="footer__container">
            <Link className="footer__homeLink" to="/">
              <h3 className="footer__logo">MELDER</h3>
            </Link>
          </div>
          <div className="footer__details">
            <div className="footer__details--wrapper">
              <h4 className="footer__heading">Developed By:</h4>
              <p className="footer__name">Damon Chouinard</p>
              <p className="footer__git">https://github.com/MrPreachez</p>
              <Link to={('https://www.linkedin.com/in/damon-chouinard/')}></Link>
              <p className="footer__linkedIn">
                https://www.linkedin.com/in/damon-chouinard/
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
