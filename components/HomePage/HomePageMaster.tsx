import flattenComponentsList from '../../utils/handle-components-list';

const HomePageMaster = ({ homePageComponents, bannerData }: any) => {
  const componentsListFlattenArray = flattenComponentsList(homePageComponents);
  if (homePageComponents?.length === 0) {
    return <p>No components to display for the home page.</p>;
  }
  if (componentsListFlattenArray?.length === 0) return <p>No components to display for the home page.</p>;

  const componentsToRender = componentsListFlattenArray?.map((componentName: any) => {
    const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
    if (componentName?.section_name === 'BannerSection') {
      return <Component key={componentName?.component_name} bannerData={bannerData} />;
    }
    return <Component key={componentName?.component_name} />;
  });

  return (
    <>
      {componentsToRender}
      <p>hello</p>
    </>
  );
};
export default HomePageMaster;
