const Pledge = (props) => {
  const pledge = props.pledge;

  return (
    <div className={pledge.divClass} id={pledge.pledgeId}>
      <MainContainer pledge={pledge} />
      <FormContainer pledge={pledge} />
    </div>
  );
};

export default Pledge;

const MainContainer = (props) => {
  const pledgeData = props.pledge.main;
  return (
    <div className={pledgeData.divClass}>
      <label
        htmlFor={pledgeData.inputId}
        className="pledge__header radio__label"
      >
        <input
          className="radio__input"
          type="radio"
          name={pledgeData.inputName ? pledgeData.inputName : "select-reward"}
          id={pledgeData.inputId}
          data-group={pledgeData.dataGroup ? pledgeData.dataGroup : ""}
        />
        <span className="radio__control"></span>
        <div className="pledge__header-text">
          <h3 className="heading heading--pledge">{pledgeData.text}</h3>
          {pledgeData.requirement ? (
            <p className="paragraph paragraph--pledge-requirement">
              Pledge $25 or more
            </p>
          ) : null}
        </div>
      </label>
      <div className="pledge__description">
        <p className="paragraph paragraph--modal">{pledgeData.description}</p>
      </div>
      {pledgeData.footer ? (
        <div className="pledge__footer">
          <div className="pledge__footer-text">
            <p className={pledgeData.footerClass}>{pledgeData.footer}</p>
            <p className="paragraph">left</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const FormContainer = (props) => {
  const pledgeData = props.pledge.form;
  return (
    <div className="pledge__form-container">
      <form
        action="/"
        className="pledge__form"
        data-group={pledgeData.dataGroup ? pledgeData.dataGroup : ""}
      >
        <p className="paragraph paragraph--form">Enter your pledge</p>
        <div className="pledge__form-inputs">
          <label htmlFor={pledgeData.inputId} className="amount__label">
            <span>$</span>
            <input
              className="amount__input"
              type="number"
              name={
                pledgeData.inputName ? pledgeData.inputName : "select-reward"
              }
              id={pledgeData.inputId}
              min={pledgeData.min}
              defaultValue={pledgeData.val}
              required
            />
          </label>
          <button
            type="submit"
            id={pledgeData.buttonId}
            className="btn btn--modal-form btn--teal"
            aria-label={pledgeData.ariaLabel}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};
