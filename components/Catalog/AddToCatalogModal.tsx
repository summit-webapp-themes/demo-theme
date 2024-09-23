import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddToCatalogModal = ({ show, handleClose, catalogListData, handleSaveCatalogName }: any) => {
  const [catalogName, setCatalogName] = useState('');
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select catalog to proceed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="">Select Catalog :</label>
          <select className="form-select mt-3" aria-label="Default select example" onChange={(e) => setCatalogName(e.target.value)}>
            <option selected>Open this select menu</option>
            {catalogListData?.length > 0 && catalogListData?.map((catalog: any) => <option value={catalog?.slug}>{catalog?.name}</option>)}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveCatalogName(catalogName)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddToCatalogModal;
