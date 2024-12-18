import React, { useEffect } from 'react';
import { CONSTANTS } from '../services/config/app-config';
import { useDispatch } from 'react-redux';
import MetaTag from '../services/api/general-apis/meta-tag-api';
import useGoogleAnalyticsOperationsHandler from '../hooks/GoogleAnalytics/useGoogleAnalyticsOperationsHandler';
import PageMetaData from '../components/PageMetaData';
import HomePageMaster from '../components/HomePage/HomePageMaster';
import getHomePageComponentsList from '../services/api/home-page-apis/get-home-page-components';
import { ComponentTypes } from '../interfaces/components-types';

const Home = ({ homePageComponents }: any) => {
  console.log('homePage', homePageComponents);
  const dispatch = useDispatch();
  const { sendPageViewToGA } = useGoogleAnalyticsOperationsHandler();
  useEffect(() => {
    sendPageViewToGA(window.location.pathname + window.location.search, 'Home Page');
  }, []);
  return (
    <>
      {/* {CONSTANTS.ENABLE_META_TAGS && <PageMetaData meta_data={fetchedDataFromServer?.metaTagsData} />} */}
      <HomePageMaster homePageComponents={homePageComponents} />
    </>
  );
};
export const getStaticProps = async () => {
  const { SUMMIT_APP_CONFIG } = CONSTANTS;
  let componentsList: any;
  let fetchComponentsList: any = await getHomePageComponentsList(SUMMIT_APP_CONFIG);
  if (
    fetchComponentsList?.status === 200 &&
    fetchComponentsList?.data?.message?.msg === 'success' &&
    fetchComponentsList?.data?.message?.data?.length > 0
  ) {
    componentsList = fetchComponentsList?.data?.message?.data;
    // dispatch(createComponentsList(fetchComponentsList?.data?.message?.data));
  }
  const filteredHomePageComponentsFromAllComponentsList: any = componentsList?.filter(
    (component: ComponentTypes) => component?.page_name === 'home-page'
  );

  return {
    props: {
      homePageComponents: filteredHomePageComponentsFromAllComponentsList || [],
    },
  };
};
// export async function getServerSideProps(context: any) {
//   const { SUMMIT_APP_CONFIG } = CONSTANTS;
//   let fetchedDataFromServer: any = {};
//   const method = 'get_meta_tags';
//   const version = SUMMIT_APP_CONFIG.version;
//   const entity = 'seo';
//   const params = `?version=${version}&method=${method}&entity=${entity}`;
//   const url = `${context.resolvedUrl.split('?')[0]}`;
//   if (CONSTANTS.ENABLE_META_TAGS) {
//     let metaData: any = await MetaTag(`${CONSTANTS.API_BASE_URL}${SUMMIT_APP_CONFIG.app_name}${params}&page_name=${url}`);
//     if (metaData.status === 200 && metaData?.data?.message?.msg === 'success' && metaData?.data?.message?.data !== 'null') {
//       fetchedDataFromServer.metaTagsData = metaData?.data?.message?.data;
//     } else {
//       fetchedDataFromServer.metaTagsData = {};
//     }
//   }
//   return {
//     props: {
//       fetchedDataFromServer,
//     },
//   };
// }

export default Home;
