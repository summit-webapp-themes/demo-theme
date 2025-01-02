import flattenComponentsList from '../../utils/handle-components-list';
import MasterComponent from './JewelleryFeaturedCollections/JewelleryFeaturedCollectionsWithVariantImage/MasterComponent';

const HomePageMaster = ({ homePageComponents, bannerData }: any) => {
  const componentsListFlattenArray = flattenComponentsList(homePageComponents);
  // if (homePageComponents?.length === 0) {
  //   // return <p>No components to display for the home page.</p>;
  //   return (
  //     <>
  //       <MasterComponent />
  //     </>
  //   );
  // }
  // if (componentsListFlattenArray?.length === 0) return <p>No components to display for the home page.</p>;

  // const componentsToRender = componentsListFlattenArray?.map((componentName: any) => {
  //   const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
  //   if (componentName?.section_name === 'BannerSection') {
  //     return <Component key={componentName?.component_name} bannerData={bannerData} />;
  //   }
  //   return <Component key={componentName?.component_name} />;
  // });
  // console.log('data111');
  return (
    <>
      <MasterComponent />
      {/* {componentsToRender} */}
    </>
  );
};
export default HomePageMaster;
