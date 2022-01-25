import CloseIcon from "../../images/icon-close-modal.svg";

const ModalHeader = () => {
  return (
    <div>
      <div className="modal__header">
        <h2 className="heading heading--modal">Back this project</h2>
        <button className="btn btn--close-modal" aria-label="close modal">
          <img src={CloseIcon} alt="" />
        </button>
      </div>
      <div className="modal__description">
        <p className="paragraph paragraph--about">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
    </div>
  );
};

export default ModalHeader;
