import React from 'react';
import Image from 'next/image';
import useHomeTopCategories from '../../../hooks/HomePageHooks/usePersonalizedCategories';
import CategoriesData from './CategoriesData';
import CategoriesLoading from './CategoriesLoading';
import ErrorImage from '../../../public/assets/images/error-icon.png';

const TopCategories = () => {
  const { homeTopCategories, isLoading, errorMessage } = useHomeTopCategories();
  if (isLoading) {
    return <CategoriesLoading />;
  } else if (homeTopCategories?.length > 0) {
    return <CategoriesData homeTopCategories={homeTopCategories} />;
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <></>;
};

export default TopCategories;
