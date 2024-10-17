import useHomeTopCategories from '../../../hooks/HomePageHooks/usePersonalizedCategories';
import TopArrowSlider from './TopArrrowSlider';

function TopArrowCarouselMaster() {
  const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();

  return (
    <>
      <TopArrowSlider data={homeTopCategories} />
    </>
  );
}

export default TopArrowCarouselMaster;
