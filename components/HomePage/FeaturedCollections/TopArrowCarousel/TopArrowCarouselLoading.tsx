import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import ProductCardSkeleton from '../../../../cards/ProductCardSkeleton';

function TopArrowCarouselLoading() {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div className="container-fluid py-5 my-2 slider-container mt-5" key={index}>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder style={{ width: '25%', marginTop: '20px' }} />
          </Placeholder>
          <div className="row mx-0 pt-3 h-100">
            <div className="col-md-4 d-none d-md-block h-100 ps-0">
              <Placeholder as="div" animation="glow">
                <Placeholder className="w-100" style={{ height: '585px', borderRadius: '10px' }} />
              </Placeholder>
            </div>
            <div className="col-md-8 mt-0 pt-3 pt-md-0 px-0 px-md-3">
              <div className="row d-none d-lg-flex mx-0 w-100">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="col-4 text-center mb-4">
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
              <div className="row d-none d-lg-flex mx-0 w-100">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="col-4 text-center mb-4">
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
              <div className="row mx-0 d-none d-md-flex d-lg-none w-100">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="col-6 text-center mb-4">
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
              <div className="row mx-0 d-none d-md-flex d-lg-none w-100">
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="col-6 text-center mb-4">
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>

              <div className="row mx-0 d-flex d-md-none w-100">
                {[...Array(1)].map((_, index) => (
                  <div key={index} className="col-12 text-center mb-4">
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopArrowCarouselLoading;
