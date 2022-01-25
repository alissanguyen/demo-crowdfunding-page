import ModalHeader from "./ModalHeader";
import ModalPledges from "./ModalPlegdes";
import CheckIcon from "../../images/icon-check.svg";

const Modal = () => {
  return (
    <div className="modal-container hidden display-none">
      <div
        tabindex="-1"
        className="modal modal--selection"
        role="dialog"
        aria-label="back this project"
        aria-modal="true"
      >
        <ModalHeader />
        <ModalPledges />
      </div>
      <div
        tabindex="-1"
        className="modal modal--success hidden section"
        role="dialog"
        aria-label="pledge submission confirmation"
        aria-modal="true"
      >
        <img src={CheckIcon} alt="" />
        <h2 className="heading heading--secondary heading--modal">
          Thanks for your support!
        </h2>
        <p className="paragraph paragraph--modal">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="btn btn--teal btn--success" aria-label="close modal">
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Modal;
