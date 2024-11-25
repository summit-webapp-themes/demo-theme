import Image from 'next/image';
import ErrorImage from '../../../public/assets/images/error-icon.png';
import ProductBanner from './ProductBanner';
import ProductBannerLoading from './ProductBannerLoading';
import useHomeTopCategories from '../../../hooks/HomePageHooks/usePersonalizedCategories';

const ProductBannersMaster = () => {
  const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();

  if (isLoading) {
    return <ProductBannerLoading />;
  } else if (homeTopCategories?.length > 0) {
    return <ProductBanner bannersList={homeTopCategories} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default ProductBannersMaster;
