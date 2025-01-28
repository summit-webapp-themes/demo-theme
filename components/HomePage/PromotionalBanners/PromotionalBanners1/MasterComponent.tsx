import React from 'react';
import PromotionalBanners1CardContainer from './PromotionalBanners1CardContainer';
import usePromotionalBanner from '../../../../hooks/HomePageHooks/usePromotionalBanner';

function MasterComponent() {
  const { isLoading, promotionalBannerData, errorMessage } = usePromotionalBanner();

  return (
    <div>
      <PromotionalBanners1CardContainer promotionalBannerData={promotionalBannerData} />
    </div>
  );
}

export default MasterComponent;
