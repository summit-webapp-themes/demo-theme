import Image from 'next/image';
import useBanner from '../../../../hooks/HomePageHooks/useHomeBanners';
import HomeBanners from './HomeBanners';
import HomeBannersLoading from './HomeBannersLoading';
import ErrorImage from '../../../../public/assets/images/error-icon.png';

const HomeBannersInspiration3 = () => {
  const { bannersList, isLoading, errorMessage } = useBanner();
  if (isLoading) {
    return <HomeBannersLoading />;
  } else if (bannersList?.length > 0) {
    return <HomeBanners bannersList={bannersList} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default HomeBannersInspiration3;
