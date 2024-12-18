import { useSelector } from 'react-redux';
import { componentsListFromReduxStore } from '../../store/slices/general_slices/components-slice';
import { ComponentTypes } from '../../interfaces/components-types';
import getHomePageComponentsList from '../../services/api/home-page-apis/get-home-page-components';
import { CONSTANTS } from '../../services/config/app-config';
import { InferGetStaticPropsType } from 'next';

const HomePageMaster = ({ homePageComponents }: any) => {
  const componentsListFlattenArray = homePageComponents[0].component_list?.length > 0 ? homePageComponents[0].component_list?.flat() : [];
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
  // const { componentsList }: any = useSelector(componentsListFromReduxStore);
  // const homePageComponentsRenderer = () => {
  //   const filterHomePageComponentsFromAllComponentsList: any = componentsList?.filter(
  //     (component: ComponentTypes) => component?.page_name === 'home-page'
  //   );
  //   if (filterHomePageComponentsFromAllComponentsList?.length > 0) {
  //     // Need to create below variable because we get nested array of components.
  //     // a = [{p:1,q:["a","b"]}]
  //     // a[0].q.flat()
  //     // output - [a,b]
  // const componentsListFlattenArray =
  //   filterHomePageComponentsFromAllComponentsList[0].component_list?.length > 0
  //     ? filterHomePageComponentsFromAllComponentsList[0].component_list?.flat()
  //     : [];
  // if (componentsListFlattenArray?.length > 0) {
  //   console.log('componentsListFlattenArray', componentsListFlattenArray);
  //   return componentsListFlattenArray?.map((componentName: any) => {
  //     const Component = require(`./${componentName.section_name}/${componentName?.component_name}/MasterComponent`).default;
  //     return <Component key={componentName?.component_name} />;
  //   });
  // }
  // else {
  //       return `You haven't added any components to your home page.`;
  //     }
  //   } else {
  //     return "Couldn't load components.";
  //   }
  // };
  // return <>{homePageComponentsRenderer()}</>;
};
export default HomePageMaster;
