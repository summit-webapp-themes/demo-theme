import Image from 'next/image';
import useBanner from '../../../hooks/HomePageHooks/useHomeBanners';
import ErrorImage from '../../../public/assets/images/error-icon.png';
import HomeBannerInspiration1 from './HomeBannerInspiration1';
import HomeBannerInspiration1Loading from './HomeBannerInspiration1Loading';

const HomeBannerInspiration1Master = () => {
  const { bannersList, isLoading, errorMessage } = useBanner();
  if (isLoading) {
    return <HomeBannerInspiration1Loading />;
  } else if (bannersList?.length > 0) {
    return <HomeBannerInspiration1 bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default HomeBannerInspiration1Master;
