import React from 'react';
import FeaturedCollectionCard from './FeaturedCollectionCard';

function FeaturedCollectionCardContainer() {
  return (
    <div className="custom-container-xl px-4 h-100">
      <div className="my-5">
        <div className="row">
          <div className="col-6 px-3">
            <FeaturedCollectionCard />
          </div>
          <div className="col-6 px-3">
            <FeaturedCollectionCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollectionCardContainer;
