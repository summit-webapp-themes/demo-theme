import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';
import { CONSTANTS } from '../../services/config/app-config';
import CustomerReviewSkeleton from './CustomerReviewSkeleton';
import paginationStyle from '../../styles/components/pagination.module.scss';
import style from '../../styles/components/customerReview.module.scss';

const ReviewListPagination = ({ reviewList, isLoading }: any) => {
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 5;

  // Calculate the reviews to show based on the current page
  const indexOfLastReview = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewList?.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageClick = (data: any) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
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
          <div className={`d-flex justify-content-between ${style.customer_reviews_container}`}>
            <h5 className="mt-2 w-100">Customers Says</h5>
            <ReactPaginate
              previousLabel={'Prev'}
              nextLabel={'Next'}
              pageCount={Math.ceil(reviewList?.length / reviewsPerPage)}
              onPageChange={handlePageClick}
              containerClassName={`m-0 text-end d-flex justify-content-end ${paginationStyle.paginationBttns}`}
              previousLinkClassName={currentPage === 0 ? paginationStyle.paginationDisabled : paginationStyle.previousBttn}
              nextLinkClassName={
                currentPage === Math.ceil(reviewList?.length / reviewsPerPage) - 1
                  ? paginationStyle.paginationDisabled
                  : paginationStyle.nextBttn
              }
              activeClassName={`${paginationStyle.paginationActive}`}
            />
          </div>

          {currentReviews?.map((val: any, i: any) => (
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

export default ReviewListPagination;
