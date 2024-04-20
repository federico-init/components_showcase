import ReactDOM from "react-dom";

const Modal = ({ children, actionBar, onClose }) => {
  // I'm creating a ReactDOM portal here to make sure the rendered modal is not affected by the parent's CSS
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
