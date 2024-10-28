import HomeBannersInspiration1Master from './BannerSection/HomeBannersInspiration1/HomeBannersMaster';
import PersonalizedCategoriesInspiration1Master from './PersonalizedCategories/PersonalizedCategoriesInspiration1/PersonalizedCategoriesMaster';
import CollectionsMaster from './FeaturedCollections/CollectionMaster';
import BrandListing from './BrandSection/BrandListingMaster';
import style from '../../styles/components/home.module.scss';

const HomePageMaster = () => {
  return (
    <>
      <HomeBannersInspiration1Master />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <PersonalizedCategoriesInspiration1Master />
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;
