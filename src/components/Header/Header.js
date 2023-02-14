import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <section className="header__section">
      <div className="header__container--limit">
        <div className="header__container">
          <Link className="header__homeLink" to="/">
            <h3 className="header__logo">MELDER</h3>
          </Link>

          <Link className="header__login" to="/login">
            Login
          </Link>
          <Link className="header__signUp" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
