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
  console.log('componentsList', componentsList);
  const homePageComponentsRenderer = () => {
    if (componentsList?.length > 0) {
      return componentsList?.map((componentName: any) => {
        const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
        return <Component key={componentName?.component_name} />;
      });
    } else {
      return "Couldn't load components.";
    }
  };
  return <>{homePageComponentsRenderer()}</>;
};
export default HomePageMaster;
