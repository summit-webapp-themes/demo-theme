import React from 'react';
import { Placeholder } from 'react-bootstrap';

function MasonryBannerLoading() {
  return (
    <div className="container-fluid slider-container">
      <Placeholder as="div" animation="glow">
        <Placeholder className="w-100" style={{ height: '585px', borderRadius: '10px' }} />
      </Placeholder>
    </div>
  );
}

export default MasonryBannerLoading;
