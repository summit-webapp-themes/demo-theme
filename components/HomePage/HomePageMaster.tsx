import HomeBanner from './BannerSection/HomeBanner';
import TopCategories from './PersonalizedCategories/TopCategories';
import BrandListing from './BrandSection/BrandListingMaster';
import CollectionsMaster from './FeaturedCollections/CollectionMaster';
import style from '../../styles/components/home.module.scss';
import PersonalizedCategoriesBlocks from './PersonalizedCategories/PersonalizedCategoriesInspiration4/PersonalizedCategoriesBlocks';

const HomePageMaster = () => {
  return (
    <>
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <PersonalizedCategoriesBlocks/>
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;
