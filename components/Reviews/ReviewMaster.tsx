import React from 'react';
import { Button } from 'react-bootstrap';
import ReviewList from './ReviewList';
import ReviewRatingBar from './ReviewRatingBar';
import useCustomerReview from '../../hooks/ProductDetailPageHooks/useCustomerReview';
import CustomerReviewModal from './CustomerReviewModal';

const ReviewMaster = () => {
  const {
    uploadReviewImage,
    reviewPhotos,
    reviewList,
    isLoading,
    handleRating,
    handleFormSubmit,
    handleToggleReviewForm,
    showForm,
    initialValues,
    handleClose,
  } = useCustomerReview();

  return (
    <div className="container-fluid w-100 ps-lg-5 pe-lg-5">
      <div className="row">
        <div className="col-md-4">
          <ReviewRatingBar reviewList={reviewList} />
          <h5>Review this product</h5>
          <p>Share your thoughts with other customers</p>
          <Button variant="outline-primary" onClick={handleToggleReviewForm}>
            Write Product Review
          </Button>
        </div>
        <div className="col-md-8">
          <ReviewList reviewList={reviewList} isLoading={isLoading} />
        </div>
      </div>
      <CustomerReviewModal
        showForm={showForm}
        reviewPhotos={reviewPhotos}
        uploadReviewImage={uploadReviewImage}
        handleRating={handleRating}
        handleFormSubmit={handleFormSubmit}
        handleToggleReviewForm={handleToggleReviewForm}
        initialValues={initialValues}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ReviewMaster;
