import Image from 'next/image';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import HomeBannerInspiration2 from './HomeBannerInspiration2';
import HomeBannerInspiration2Loading from './HomeBannerInspiration2Loading';

const HomeBannerInspiration2Master = () => {
  const { bannersList, isLoading, errorMessage } = useBanner();
  if (isLoading) {
    return <HomeBannerInspiration2Loading />;
  } else if (bannersList?.length > 0) {
    return <HomeBannerInspiration2 bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default HomeBannerInspiration2Master;
