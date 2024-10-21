import style from '../../styles/components/home.module.scss';
import HomeBanner from './BannerSection/HomeBanner';
import BrandListing from './BrandSection/BrandListingMaster';
import CollectionsMaster from './FeaturedCollections/CollectionMaster';
import TopCategories from './PersonalizedCategories/TopCategories';
import TopArrowCarouselMaster from './TopArrowCarousel/TopArrowCarouselMaster';

const HomePageMaster = () => {
  return (
    <>
      <TopArrowCarouselMaster />
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;
