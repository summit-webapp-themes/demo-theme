import React, { useEffect, useState } from 'react';
import MultiLangApi from '../services/api/general-apis/multilanguage-api';
import { CONSTANTS } from '../services/config/app-config';
import { useDispatch } from 'react-redux';
import { fetchMultiLanguagesThunkAPI, setMultiLingualData } from '../store/slices/general_slices/multilang-slice';

const Home = ({ MultilanguageData }: any) => {
  const dispatch = useDispatch();
  dispatch(setMultiLingualData(MultilanguageData));
  return <div>Home</div>;
};

export async function getStaticProps() {
  const { SUMMIT_APP_CONFIG } = CONSTANTS;
  const multiLangParams = {
    appConfig: SUMMIT_APP_CONFIG,
  };
  const MultilanguageData = await MultiLangApi(multiLangParams.appConfig);

  return {
    props: {
      MultilanguageData,
    },
  };
}

export default Home;
