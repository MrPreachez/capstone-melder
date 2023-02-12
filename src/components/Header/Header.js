import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <section className="header__section">
      <div className="header__container">
        <Link className="header__homeLink" to="/">
          <h3 className="header__logo">MELDER</h3>
        </Link>

        <a className="header__login">Login</a>
        <a className="header__signUp">Sign Up</a>
      </div>
    </section>
  );
}

export default Header;
