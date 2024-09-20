import React from 'react';
import HomeBanner from './HomeBanner';
import TopCategories from './TopCategories';
import DisplayTag from './DisplayTag';
import BrandListing from './BrandListing';
import style from '../../styles/components/home.module.scss';

const HomePageMaster = () => {
  return (
    <>
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <DisplayTag />
      </div>
    </>
  );
};

export default HomePageMaster;
