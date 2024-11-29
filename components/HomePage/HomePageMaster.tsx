import HomeBannersInspiration1Master from './BannerSection/HomeBannersInspiration1/MasterComponent';
import PersonalizedCategoriesInspiration1Master from './PersonalizedCategories/PersonalizedCategoriesInspiration1/MasterComponent';
import BrandsSectionInspiration1Master from './BrandSection/BrandsSectionInspiration1/BrandListingInspiration1Master';
import FeaturedCollectionsInspiration1Master from './FeaturedCollections/FeaturedCollectionInspiration1/FeaturedCollectionsInspiration1Master';
import style from '../../styles/components/home.module.scss';
import HomeBannersMaster from './BannerSection/HomeBannersInspiration1/MasterComponent';

interface PageData {
  name: string; // The name of the page section
  component: string; // The type of component used
  page_name: string; // The name of the page (e.g., 'home-page')
  section_name: string; // The section within the page (e.g., 'BannerSection')
  image: string | null; // The image URL, which can be null if not provided
}

interface ComponentsTypes {
  componentsList: PageData[]; // An array of `PageData` objects
}

const HomePageMaster = ({ componentsList }: ComponentsTypes) => {
  const homePageComponentsRenderer = () => {
    if (componentsList?.length > 0) {
      return componentsList?.map((componentName: any) => {
        const Component = require(`./${componentName.section_name}/${componentName?.component}/MasterComponent`).default;
        return <Component key={componentName?.component} />;
      });
    } else {
      return "Couldn't load components.";
    }
  };
  return <>{homePageComponentsRenderer()}</>;
};
export default HomePageMaster;
