import React from 'react';
import { Modal } from 'react-bootstrap';
import CreateAddressModalFields from './CreateAddressModalFields';

const CreateAddressModal = ({
  handleCloseCreateAddModal,
  showCreateAddModal,
  modalTitle,
  stateList,
  cityList,
  handlePostAddress,
  address_type,
  handleCreateAddressChange,
}: any) => {
  return (
    <Modal show={showCreateAddModal} onHide={handleCloseCreateAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateAddressModalFields
          stateList={stateList}
          cityList={cityList}
          handleCreateAddressChange={handleCreateAddressChange}
          handlePostAddress={handlePostAddress}
          address_type={address_type}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateAddressModal;
