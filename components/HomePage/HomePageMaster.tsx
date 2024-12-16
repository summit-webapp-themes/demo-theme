import { useSelector } from 'react-redux';
import { componentsListFromReduxStore } from '../../store/slices/general_slices/components-slice';
import { ComponentTypes } from '../../interfaces/components-types';

const HomePageMaster = () => {
  const { componentsList }: any = useSelector(componentsListFromReduxStore);
  const homePageComponentsRenderer = () => {
    const filterHomePageComponentsFromAllComponentsList: any = componentsList?.filter(
      (component: ComponentTypes) => component?.page_name === 'home-page'
    );
    if (filterHomePageComponentsFromAllComponentsList?.length > 0) {
      // Need to create below variable because we get nested array of components.
      // a = [{p:1,q:["a","b"]}]
      // a[0].q.flat()
      // output - [a,b]
      const componentsListFlattenArray =
        filterHomePageComponentsFromAllComponentsList[0].component_list?.length > 0
          ? filterHomePageComponentsFromAllComponentsList[0].component_list?.flat()
          : [];
      if (componentsListFlattenArray?.length > 0) {
        console.log('componentsListFlattenArray', componentsListFlattenArray);
        return componentsListFlattenArray?.map((componentName: any) => {
          const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
          return <Component key={componentName?.component_name} />;
        });
      } else {
        return `You haven't added any components to your home page.`;
      }
    } else {
      return "Couldn't load components.";
    }
  };
  return <>{homePageComponentsRenderer()}</>;
};
export default HomePageMaster;
