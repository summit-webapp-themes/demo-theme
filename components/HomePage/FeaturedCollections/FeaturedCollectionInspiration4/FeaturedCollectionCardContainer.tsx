import React from 'react';
import FeaturedCollectionCard from './FeaturedCollectionCard';

function FeaturedCollectionCardContainer() {
  return (
    <div className="custom-container-xl px-4 mb-3 mt-5">
      <div className="row">
        <div className="col-6">
          <FeaturedCollectionCard />
        </div>
        <div className="col-6 ">
          <FeaturedCollectionCard />
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollectionCardContainer;
