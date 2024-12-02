import React from 'react';
import Image from 'next/image';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import SingleHomeBanner from './SingleHomeBanner';
import SingleHomeBannerLoading from './SingleHomeBannerLoading';

const MasterComponent = () => {
  const { bannersList, isLoading, errorMessage } = useBanner();

  if (isLoading) {
    return <SingleHomeBannerLoading />;
  } else if (bannersList?.length > 0) {
    return <SingleHomeBanner bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default MasterComponent;
