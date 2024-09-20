import React from 'react';
import dynamic from 'next/dynamic';
import HomeBanner from './BannerSection/HomeBanner';
const TopCategories = dynamic(() => import('./PersonalizedCategories/TopCategories'));
const BrandListing = dynamic(() => import('./BrandSection/BrandListingMaster'));
const CollectionsMaster = dynamic(() => import('./FeaturedCollections/CollectionMaster'));
import style from '../../styles/components/home.module.scss';

const HomePageMaster = () => {
  return (
    <>
      <HomeBanner />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;
