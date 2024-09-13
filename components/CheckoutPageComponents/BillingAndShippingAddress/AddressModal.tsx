import React from 'react';
import { Modal } from 'react-bootstrap';
import EditAddressModalFields from './EditAddressModalFields';

const AddressModal = ({
  show,
  handleClose,
  modalTitle,
  showShippingAddress,
  stateList,
  handleEditAddressChange,
  showAddress,
  cityList,
  handlePostAddress,
}: any) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditAddressModalFields
          showAddress={showAddress}
          stateList={stateList}
          handleEditAddressChange={handleEditAddressChange}
          cityList={cityList}
          handlePostAddress={handlePostAddress}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddressModal;
