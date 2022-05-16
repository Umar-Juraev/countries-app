import React from "react";
import Modal from "../../../../components/Modal/Modal";
import { Store } from "../../../../context/context";

const   ModalContent = ({  data,...props }) => {
  // const { country } = Store()
  return (
    <Modal {...props}>
      <h1>{data.name?.common}</h1>
    </Modal>
  );
};

export default ModalContent;
