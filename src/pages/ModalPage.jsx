import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // action bar is a prop that can be passed to the Modal component
  const actionBar = (
    <Button onClick={handleClose} primary>
      I Accept
    </Button>
  );

  const modalComponent = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Important agreement for user to accept.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modalComponent}
    </div>
  );
};

export default ModalPage;
