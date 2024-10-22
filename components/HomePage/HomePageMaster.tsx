// import HomeBanner from './BannerSection/HomeBanner';
import TopCategories from './PersonalizedCategories/TopCategories';
import BrandListing from './BrandSection/BrandListingMaster';
import CollectionsMaster from './FeaturedCollections/CollectionMaster';
import style from '../../styles/components/home.module.scss';
import MasonryBanner from './BannerSection/MasonryBanner';
// import MasonryBannerLoading from './BannerSection/MasonryBannerLoading';

const HomePageMaster = () => {
  return (
    <>
      {/* <HomeBanner /> */}
      <MasonryBanner />
      {/* <MasonryBannerLoading /> */}
      <div className={`row mx-0 ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;
