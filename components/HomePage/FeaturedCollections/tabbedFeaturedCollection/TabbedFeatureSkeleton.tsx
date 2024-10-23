import React from 'react';
import ProductCardSkeleton from '../../../../cards/ProductCardSkeleton';
import { Card, Placeholder } from 'react-bootstrap';

type Props = {};

const TabbedFeatureSkeleton = (props: Props) => {
  return (
    <div className="my-5 card">
      <div className="row">
        <div className=" my-3">
          <div className="text-center">
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder style={{ width: '25%', marginTop: '20px' }} />
            </Placeholder>
          </div>
          <div className="text-center">
            <p className="fs-6"></p>
          </div>
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-sm-6 col-lg-2 col-xl-2 col-xxl-2 text-center mb-4">
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedFeatureSkeleton;
