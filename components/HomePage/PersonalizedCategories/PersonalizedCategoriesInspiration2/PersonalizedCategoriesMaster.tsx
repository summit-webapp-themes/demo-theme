import Image from 'next/image';
import useHomeTopCategories from '../../../../hooks/HomePageHooks/usePersonalizedCategories';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import TopArrowSlider from './PersonalizedCategoriesSlider';
import TopArrowCarouselSkeleton from './PersonalizedCategoriesLoader';

function PersonalizedCategoriesMaster() {
  const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();
  if (isLoading) {
    return <TopArrowCarouselSkeleton />;
  } else if (homeTopCategories?.length > 0) {
    return <TopArrowSlider data={homeTopCategories} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  } else {
    return <></>;
  }
}

export default PersonalizedCategoriesMaster;
