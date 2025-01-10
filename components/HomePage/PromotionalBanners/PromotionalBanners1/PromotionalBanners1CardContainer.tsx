import React from 'react';
import PromotionalBanners1Card from './PromotionalBanners1Card';

function PromotionalBanners1CardContainer() {
  return (
    <div className="custom-container-xl px-4 h-100">
      <div className="py-5">
        <div className="row">
          {[...Array(2)].map((item: any, index: any) => (
            <div className="col-6 px-3">
              <PromotionalBanners1Card data={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanners1CardContainer;
