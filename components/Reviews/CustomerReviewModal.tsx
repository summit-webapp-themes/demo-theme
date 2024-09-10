import React from 'react';
import { Modal } from 'react-bootstrap';
import ReviewForm from './ReviewForm';

const CustomerReviewModal = ({
  reviewPhotos,
  uploadReviewImage,
  handleRating,
  handleFormSubmit,
  handleToggleReviewForm,
  showForm,
  initialValues,
  handleClose,
}: any) => {
  return (
    <Modal show={showForm} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewForm
          reviewPhotos={reviewPhotos}
          uploadReviewImage={uploadReviewImage}
          handleRating={handleRating}
          handleFormSubmit={handleFormSubmit}
          handleToggleReviewForm={handleToggleReviewForm}
          initialValues={initialValues}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CustomerReviewModal;
