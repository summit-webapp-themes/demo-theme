import Image from 'next/image';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import PersonalizedCategoriesWithGridLayout from './PersonalizedCategoriesWithGridLayout';
import PersonalizedCategoriesWithGridLayoutLoading from './PersonalizedCategoriesWithGridLayoutLoading';
import useHomeTopCategories from '../../../../hooks/HomePageHooks/usePersonalizedCategories';

const MasterComponent = () => {
  const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();

  if (isLoading) {
    return <PersonalizedCategoriesWithGridLayoutLoading />;
  } else if (homeTopCategories?.length > 0) {
    return <PersonalizedCategoriesWithGridLayout bannersList={homeTopCategories} />;
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
