import HomeBanner from './BannerSection/HomeBanner';
import TopCategories from './PersonalizedCategories/TopCategories';
import BrandListing from './BrandSection/BrandListingMaster';
import LinearProductCarouselMaster from './FeaturedCollections/LinearProductCarousel/LinearProductCarouselMaster';
import style from '../../styles/components/home.module.scss';
// import TopArrowCarouselMaster from './FeaturedCollections/TopArrowCarousel/TopArrowCarouselMaster';

const HomePageMaster = () => {
  return (
    <>
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <LinearProductCarouselMaster />
        {/* <TopArrowCarouselMaster /> */}
      </div>
    </>
  );
};

export default HomePageMaster;
