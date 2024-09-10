import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { CONSTANTS } from '../../services/config/app-config';
import Style from '../../styles/components/customerReview.module.scss';

const ReviewForm = ({ reviewPhotos, uploadReviewImage, handleRating, handleFormSubmit, initialValues }: any) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={ReviewFormValidation}
        onSubmit={(values, { resetForm, setFieldValue }) => {
          handleFormSubmit(values, resetForm);
        }}
      >
        {() => (
          <Form>
            <div className="d-grid my-3">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className={Style.reviewForm} />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="d-grid my-3">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" className={Style.reviewForm} />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="star-rating">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Rating allowFraction onClick={handleRating} transition />
                </div>
              </div>
            </div>

            <div className="d-grid my-3">
              <label htmlFor="images">Images</label>
              <div className="col-md-12">
                <div className="d-flex row-flex">
                  {reviewPhotos.length > 0 &&
                    reviewPhotos.map((photo: any, index: any) => (
                      <div key={index} className="ml-2">
                        <img src={`${CONSTANTS.API_BASE_URL}${photo.image}`} alt={`Uploaded File ${index}`} style={{ width: '120px' }} />

                        {/* <span className="delete-file" onClick={() => handleDeleteFile(index)} style={{ cursor: 'pointer' }}>
                    X
                  </span> */}
                      </div>
                    ))}
                </div>
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
              <Field as="textarea" name="comment" className={Style.reviewForm} />
              <ErrorMessage name="description" component="div" className="error" />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReviewForm;
