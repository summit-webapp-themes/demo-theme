import flattenComponentsList from '../../utils/handle-components-list';

const HomePageMaster = ({ homePageComponents }: any) => {
  const componentsListFlattenArray = flattenComponentsList(homePageComponents);
  if (homePageComponents?.length === 0) {
    return <p>No components to display for the home page.</p>;
  }
  if (componentsListFlattenArray?.length === 0) return <p>No components to display for the home page.</p>;

  if (componentsListFlattenArray?.length > 0) {
    console.log('componentsListFlattenArray', componentsListFlattenArray);
    return componentsListFlattenArray?.map((componentName: any) => {
      const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
      return <Component key={componentName?.component_name} />;
    });
  }
};
export default HomePageMaster;
