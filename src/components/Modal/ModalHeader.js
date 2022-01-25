import CloseIcon from "../../images/icon-close-modal.svg";

const ModalHeader = () => {
  return (
    <div>
      <div class="modal__header">
        <h2 class="heading heading--modal">Back this project</h2>
        <button class="btn btn--close-modal" aria-label="close modal">
          <img src={CloseIcon} alt="" />
        </button>
      </div>
      <div class="modal__description">
        <p class="paragraph paragraph--about">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
    </div>
  );
};

export default ModalHeader;
