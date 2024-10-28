import Image from 'next/image';
import React from 'react';
import HomeBannerInspiration4Loading from './HomeBannerInspiration4Loading';
import HomeBannerInspiration4 from './HomeBannerInspiration4';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import ErrorImage from '../../../../public/assets/images/error-icon.png';

function HomeBannerInspiration4Master() {
  const { bannersList, isLoading, errorMessage } = useBanner();

  if (isLoading) {
    return <HomeBannerInspiration4Loading />;
  } else if (bannersList?.length > 0) {
    return <HomeBannerInspiration4 bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
}

export default HomeBannerInspiration4Master;
