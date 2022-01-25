import MastercraftLogo from "../../images/logo-mastercraft.svg";

const IntroSection = () => {
  return (
    <section className="intro section">
      <img
        src={MastercraftLogo}
        alt="mastercraft logo"
        className="intro__logo"
      />
      <div className="intro__text">
        <h1 className="heading heading--primary">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="paragraph paragraph--primary">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className="intro__btns">
        <button
          className="btn btn--teal btn--primary modal-trigger"
          aria-expanded="false"
          aria-label="open modal"
        >
          Back this project
        </button>
        <button
          className="btn bookmark"
          aria-label="bookmark project"
          aria-pressed="false"
        >
          <svg
            className="bookmark__icon"
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
              <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span className="bookmark__text">
            Bookmark<span className="bookmark__text--active">ed</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default IntroSection;
