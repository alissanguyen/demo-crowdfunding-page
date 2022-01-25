const Reward = (props) => {
  const reward = props.reward;
  return (
    <div class={reward.class}>
      <div class="reward__header">
        <h3 class="heading heading--tertiary">{reward.heading}</h3>
        <p class="paragraph paragraph--requirement">{reward.requirement}</p>
      </div>
      <div class="reward__description">
        <p class="paragraph paragraph--about">{reward.about}</p>
      </div>
      <div class="reward__footer">
        <div class="reward__footer-text">
          <p class={reward.footerClass}>{reward.footerNumber}</p>
          <p class="paragraph">left</p>
        </div>
        <button
          data-group={reward.dataGroup}
          id={reward.dataGroup}
          class={reward.buttonClass}
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
