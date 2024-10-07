import React from 'react';
import Image from 'next/image';
import { CONSTANTS } from '../../services/config/app-config';
import { FaUserCircle } from 'react-icons/fa';
import style from '../../styles/components/customerReview.module.scss';
import { Rating } from 'react-simple-star-rating';
import CustomerReviewSkeleton from './CustomerReviewSkeleton';

const ReviewList = ({ reviewList, isLoading }: any) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  const renderProductReviewListing = () => {
    if (isLoading) {
      return (
        <div className="row">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <CustomerReviewSkeleton />
            </div>
          ))}
        </div>
      );
    }
    if (reviewList?.length > 0) {
      return (
        <>
          <h5 className="mt-2">Customers Says</h5>
          {reviewList?.map((val: any, i: any) => (
            <div className="row listing-card py-2" key={i}>
              <div className="col-lg-12 p-2 border ">
                <div className="row">
                  <div className="col-12">
                    <p className="fs-2 mb-0">
                      <FaUserCircle size={27} />
                      <span className={`fw-semibold text-capitalize ${style.text_margin}`}>{val.name}</span>
                    </p>
                    <Rating allowFraction initialValue={val.rating * 5} onClick={function noRefCheck() {}} readonly size={20} />
                    <p className="my-1">Reviewed On {val.date.split('-').reverse().join('/')}</p>
                  </div>
                  <div className="col-md-8">
                    <p>{val.comment}</p>
                    <div className="rating-image d-flex flex-wrap">
                      {val?.images?.length > 0 &&
                        val?.images?.map((element: any, ind: number) => {
                          return (
                            <div className="image-cont" key={ind}>
                              <Image loader={imageLoader} src={element.image} width={90} height={90} alt="Item Image" priority={true} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
    if (reviewList?.length === 0) {
      return <h6 className="mt-5">Be the first to review this product</h6>;
    }
  };
  return <>{renderProductReviewListing()}</>;
};

export default ReviewList;
