import { useSelector } from 'react-redux';
import { componentsListFromReduxStore } from '../../store/slices/general_slices/components-slice';
import { ComponentTypes } from '../../interfaces/components-types';

const HomePageMaster = () => {
  const { componentsList }: any = useSelector(componentsListFromReduxStore);

  const homePageComponentsRenderer = () => {
    const filterHomePageComponentsFromAllComponentsList: ComponentTypes[] = componentsList?.filter(
      (component: ComponentTypes) => component?.page_name === 'home-page'
    );
    if (filterHomePageComponentsFromAllComponentsList?.length > 0) {
      return filterHomePageComponentsFromAllComponentsList?.map((componentName: any) => {
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
