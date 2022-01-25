import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
import HeroImageLg from "../images/image-hero-desktop.jpg";
import HeroImageSm from "../images/image-hero-mobile.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="masthead">
        <a href="/" className="masthead__logo">
          <img src={Logo} alt="Crowdfund - Home" />
        </a>
        <nav className="navigation">
          <button
            className="navigation__btn btn btn--menu"
            aria-label="menu toggle"
            aria-expanded="false"
          >
            <img src={Hamburger} className="menu-icon" alt="menu icon" />
          </button>
          <ul className="navigation__list navigation__list--hidden">
            <li className="navigation__list-item">
              <a href="/">About</a>
            </li>
            <li className="navigation__list-item">
              <a href="/">Discover</a>
            </li>
            <li className="navigation__list-item">
              <a href="/">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__hero">
        <picture>
          <source media="(min-width: 800px)" srcSet={HeroImageLg} />
          <img src={HeroImageSm} alt="" />
        </picture>
      </div>
    </header>
  );
};

export default Header;
