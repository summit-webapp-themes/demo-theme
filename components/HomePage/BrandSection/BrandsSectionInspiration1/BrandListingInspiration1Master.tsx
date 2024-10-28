import Image from 'next/image';
import useTopBrand from '../../../../hooks/HomePageHooks/useHomeBrands';
import BrandsLoading from './BrandsInspiration1Loading';
import BrandsData from './BrandsInspiration1Data';
import ErrorImage from '../../../../public/assets/images/error-icon.png';

const BrandListing = () => {
  const { isLoading, brandListing, errorMessage } = useTopBrand();
  if (isLoading) {
    return <BrandsLoading />;
  } else if (brandListing?.length > 0) {
    return <BrandsData brandListing={brandListing} />;
  } else if (errorMessage) {
  } else {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default BrandListing;
