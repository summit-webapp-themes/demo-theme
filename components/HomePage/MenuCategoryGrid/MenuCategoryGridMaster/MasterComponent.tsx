import React from 'react';
import useNavbar from '../../../../hooks/GeneralHooks/useNavbar';
import MenuCategoryGridLoader from './MenuCategoryGridLoader';
import MenuCategoryGridMain from './MenuCategoryGridMain';

const MasterComponent = ({ componentProperties }: any) => {
  const { navbarData, isLoading, errorMessage } = useNavbar();
  if (isLoading) {
    return <MenuCategoryGridLoader />;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return (
    <div>
      <MenuCategoryGridMain collectionData={navbarData} />
    </div>
  );
};

export default MasterComponent;
