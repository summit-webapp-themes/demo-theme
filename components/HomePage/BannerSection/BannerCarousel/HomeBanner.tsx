import Image from 'next/image';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import HomeBannerLoading from './HomeBannerLoading';
import ErrorImage from '../../../public/assets/images/error-icon.png';
import BannerCarousel from './BannerCarousel';

const HomeBanner = () => {
  const { bannersList, isLoading, errorMessage } = useBanner();
  if (isLoading) {
    return <HomeBannerLoading />;
  } else if (bannersList?.length > 0) {
    return <BannerCarousel bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default HomeBanner;
