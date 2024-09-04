import React from 'react';
import { Modal } from 'react-bootstrap';

function MissingPartModal({ handleSubmit, showMissingPartsModal, handleMissingPartsModalClose, multiLanguagesData }: any) {
  return (
    <Modal show={showMissingPartsModal} onHide={handleMissingPartsModalClose}>
      <Modal.Header closeButton>
        <h4 className="text-center mt-2">{multiLanguagesData?.what_are_you_searching_today}</h4>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group mt-2">
          <h6 className="text-capitalize">{multiLanguagesData?.choice_product_not_f}</h6>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            // value={descriptionVal}
            // onChange={(e) => (setdescriptionval(e?.target?.value), setmessageNew(''))}
          ></textarea>
        </div>
        {/* <p className="text-danger">{messageNew}</p> */}
        <div className="text-right mt-4">
          <button
            className="btn btn-primary text-white"
            style={{
              border: '1px solid #0071DC',
              borderRadius: '7px',
              backgroundColor: '#0071DC',
            }}
            onClick={(e) => handleSubmit(e)}
          >
            {multiLanguagesData?.submit_enquiry}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MissingPartModal;
