import React from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import ProductCardSkeleton from '../../../../cards/ProductCardSkeleton';

const FeaturedCollectionsInspiration1Loading = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div className="row" key={index}>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder style={{ width: '25%', marginTop: '20px' }} />
          </Placeholder>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="col-sm-6 col-lg-2 col-xl-2 col-xxl-2 text-center mb-4">
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
export default FeaturedCollectionsInspiration1Loading;
