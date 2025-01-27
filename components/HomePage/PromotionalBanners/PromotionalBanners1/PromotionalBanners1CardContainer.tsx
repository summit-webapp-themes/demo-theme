import React from 'react';
import PromotionalBanners1Card from './PromotionalBanners1Card';

function PromotionalBanners1CardContainer({ promotionalBannerData }: any) {
  console.log('promotionalBannerData', promotionalBannerData);
  return (
    <div className="custom-container-xl pt-5 h-100">
      <div className="py-5">
        <div className="row">
          {promotionalBannerData.map((item: any, index: any) => (
            <div className="col-6 px-3">
              <PromotionalBanners1Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanners1CardContainer;
