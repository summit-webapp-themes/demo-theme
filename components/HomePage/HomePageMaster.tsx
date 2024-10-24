import HomeBanner from './BannerSection/HomeBanner';
import BrandListing from './BrandSection/BrandListingMaster';
import CollectionsMaster from './FeaturedCollections/CollectionMaster';
import style from '../../styles/components/home.module.scss';
import PersonalizedCategoriesMaster from './PersonalizedCategories/PersonalizedCategoriesInspiration1/PersonalizedCategoriesMaster';

const HomePageMaster = () => {
  return (
    <>
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <PersonalizedCategoriesMaster />
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;