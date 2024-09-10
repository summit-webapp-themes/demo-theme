import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import PostProductReviewAPI from '../../services/api/product-detail-page-apis/post-new-product-review';
import { CONSTANTS } from '../../services/config/app-config';

const ReviewForm = () => {
  const { uploadReviewImage, query, getProductReview, TokenFromStore, setReviewPhotos, reviewPhotos } = useProductDetail();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  // const [reviewPhotos, setReviewPhotos] = useState<any[]>([]);
  const [value, setValue] = React.useState<any>(1);

  let ratingValues: any = value / 5;
  const initialValues = {
    name: '',
    email: '',
    item_code: query?.productId,
    images: reviewPhotos, // Updated to use the reviewPhotos array
    comment: '',
    rating: ratingValues,
  };
  const handleFormSubmit = async (values: any, resetForm: any) => {
    let reviewData = { ...values, rating: ratingValues, images: reviewPhotos };
    let response = await PostProductReviewAPI(reviewData, TokenFromStore.token);
    if (response?.msg === 'success') {
      getProductReview();
    }
    values.images = reviewPhotos;

    setValue('');
    setReviewPhotos([]);
    resetForm();
  };
  const handleRating = (e: any) => {
    console.log(handleRating, 'handleRating');
  };
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ReviewFormValidation}
      onSubmit={(values, { resetForm, setFieldValue }) => {
        handleFormSubmit(values, resetForm);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div className="d-grid my-3">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="d-grid my-3">
            <label htmlFor="email">Email</label>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="star-rating">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  direction: 'ltr',
                  fontFamily: 'sans-serif',
                  touchAction: 'none',
                }}
              >
                <Rating allowFraction onClick={handleRating} transition />
              </div>
            </div>
          </div>

          <div className="d-grid my-3">
            <label htmlFor="images">Images</label>
            <div className="col-md-12">
              {reviewPhotos.map((photo, index) => (
                <div key={index}>
                  <span>
                    <img src={`${CONSTANTS.API_BASE_URL}${photo.image}`} alt={`Uploaded File ${index}`} style={{ width: '120px' }} />
                  </span>
                  {/* <span className="delete-file" onClick={() => handleDeleteFile(index)} style={{ cursor: 'pointer' }}>
                    X
                  </span> */}
                </div>
              ))}
              {/* Display the file upload input */}
              <div className="file file--upload">
                <label htmlFor="input-file" className="upload-label label-color">
                  <div className="upload-circle">{/* <i className="fas fa-upload "></i> */}</div>
                </label>
                <input id="input-file" type="file" onChange={(e: any) => uploadReviewImage(e.target.files?.[0])} />
              </div>
            </div>
            <ErrorMessage name="images" component="div" className="error" />
          </div>
          <div className="d-grid my-3">
            <label htmlFor="comment">Description</label>
            <Field as="textarea" name="comment" />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          <button className="btn " type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReviewForm;
