import React, { useEffect } from 'react';
import { CONSTANTS } from '../services/config/app-config';
import { useDispatch } from 'react-redux';
import MetaTag from '../services/api/general-apis/meta-tag-api';
import useGoogleAnalyticsOperationsHandler from '../hooks/GoogleAnalytics/useGoogleAnalyticsOperationsHandler';
import PageMetaData from '../components/PageMetaData';
import HomePageMaster from '../components/HomePage/HomePageMaster';
import getComponentsList from '../services/api/home-page-apis/get-components-list';
import { ComponentTypes } from '../interfaces/components-types';
import getBannerAPI from '../services/api/home-page-apis/banner-api';

type BannerDataTypes = {
  img: string;
  button_1_title?: string;
  sequence: string;
  button_1_url?: string;
  heading?: string;
};

type BannerArrayTypes = {
  data: BannerDataTypes[];
};

export const getStaticProps = async () => {
  const { SUMMIT_APP_CONFIG } = CONSTANTS;
  let componentsList: any;
  let fetchComponentsList: any = await getComponentsList(SUMMIT_APP_CONFIG);
  if (
    fetchComponentsList?.status === 200 &&
    fetchComponentsList?.data?.message?.msg === 'success' &&
    fetchComponentsList?.data?.message?.data?.length > 0
  ) {
    componentsList = fetchComponentsList?.data?.message?.data;
  }
  const filteredHomePageComponentsFromAllComponentsList: any = componentsList?.filter(
    (component: ComponentTypes) => component?.page_name === 'home-page'
  );
  let bannerData: BannerArrayTypes;
  let getBannerImgs: any = await getBannerAPI(SUMMIT_APP_CONFIG, undefined);
  if (getBannerImgs?.status === 200 && getBannerImgs?.data?.msg === 'success') {
    bannerData = { data: getBannerImgs?.data?.data };
  } else {
    bannerData = { data: [] };
  }

  return {
    props: {
      homePageComponents: filteredHomePageComponentsFromAllComponentsList || [],
      bannerData: bannerData || { data: [] },
    },
  };
};
const Home = ({ homePageComponents, bannerData }: any) => {
  const { sendPageViewToGA } = useGoogleAnalyticsOperationsHandler();
  useEffect(() => {
    sendPageViewToGA(window.location.pathname + window.location.search, 'Home Page');
  }, []);
  return (
    <>
      {/* {CONSTANTS.ENABLE_META_TAGS && <PageMetaData meta_data={fetchedDataFromServer?.metaTagsData} />} */}
      <HomePageMaster homePageComponents={homePageComponents} bannerData={bannerData} />
    </>
  );
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
