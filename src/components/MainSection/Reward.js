const Reward = (props) => {
  const reward = props.reward;
  return (
    <div className={reward.class}>
      <div className="reward__header">
        <h3 className="heading heading--tertiary">{reward.heading}</h3>
        <p className="paragraph paragraph--requirement">{reward.requirement}</p>
      </div>
      <div className="reward__description">
        <p className="paragraph paragraph--about">{reward.about}</p>
      </div>
      <div className="reward__footer">
        <div className="reward__footer-text">
          <p className={reward.footerClass}>{reward.footerNumber}</p>
          <p className="paragraph">left</p>
        </div>
        <button
          data-group={reward.dataGroup}
          id={reward.dataGroup}
          className={reward.buttonClass}
          aria-expanded="false"
          aria-label={reward.ariaLabel}
        >
          {reward.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Reward;
