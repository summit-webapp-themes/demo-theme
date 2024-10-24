import HomeBanner from './BannerSection/HomeBanner';
import TopCategories from './PersonalizedCategories/TopCategories';
import BrandListing from './BrandSection/BrandListingMaster';
import CollectionsMaster from './FeaturedCollections/FeaturedCollectionInspiration1/FeaturedCollectionsInspiration1Master';
import style from '../../styles/components/home.module.scss';
import FeaturedCollectionsInspiration1Master from './FeaturedCollections/FeaturedCollectionInspiration1/FeaturedCollectionsInspiration1Master';

const HomePageMaster = () => {
  return (
    <>
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <FeaturedCollectionsInspiration1Master />
      </div>
    </>
  );
};
export default HomePageMaster;
