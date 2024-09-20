import React from 'react';
import { Modal } from 'react-bootstrap';
import SortByFilter from './SortByFilter';

function SortbyModal({ show, handleClose, sortBy, handleSortBy }: any) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sort by</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="web-filter">
          <SortByFilter sortBy={sortBy} handleSortBy={handleSortBy} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-primary" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SortbyModal;
