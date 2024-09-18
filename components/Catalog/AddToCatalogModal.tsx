import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddToCatalogModal = ({ show, handleClose, catalogListData }: any) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select catalog to proceed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Select Catalog :</label>
          <select className="form-select mt-3" aria-label="Default select example">
            <option selected>Open this select menu</option>
            {catalogListData?.length > 0 && catalogListData?.map((catalog: string) => <option value={catalog}>{catalog}</option>)}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToCatalogModal;
