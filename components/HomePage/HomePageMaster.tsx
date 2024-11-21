import HomeBannerWithRightSideTitle from './BannerSection/HomeBannerWithRightSideTitle/HomeBannersMaster';
import PersonalizedCategoriesInspiration1Master from './PersonalizedCategories/PersonalizedCategoriesInspiration1/PersonalizedCategoriesMaster';
import BrandsSectionInspiration1Master from './BrandSection/BrandsSectionInspiration1/BrandListingInspiration1Master';
import FeaturedCollectionsInspiration1Master from './FeaturedCollections/FeaturedCollectionInspiration1/FeaturedCollectionsInspiration1Master';
import style from '../../styles/components/home.module.scss';

const HomePageMaster = () => {
  return (
    <>
      <HomeBannerWithRightSideTitle />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <PersonalizedCategoriesInspiration1Master />
        <BrandsSectionInspiration1Master />
        <FeaturedCollectionsInspiration1Master />
      </div>
    </>
  );
};
export default HomePageMaster;
