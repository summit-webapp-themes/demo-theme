import React from 'react';
import MenuCategoryGridLoader from './MenuCategoryGridLoader';
import MenuCategoryGridMain from './MenuCategoryGridMain';
import useCollection from '../../../../hooks/CollectionHooks/useCollection';

const MasterComponent = ({ componentProperties }: any) => {
  const { isLoading, collectionData, errorMessage } = useCollection();
  if (isLoading) {
    return <MenuCategoryGridLoader />;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return (
    <div style={{ backgroundColor: '#F9FAFB'}}>
      <MenuCategoryGridMain collectionData={collectionData} />
    </div>
  );
};

export default MasterComponent;
