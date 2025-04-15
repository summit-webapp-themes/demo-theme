import React from 'react';
import useNavbar from '../../../../hooks/GeneralHooks/useNavbar';
import CollectionGrid from './CollectionGrid';
import GridCollectionsLoader from './GridCollectionsLoader';

const MasterComponent = ({ componentProperties }: any) => {
  const { navbarData, isLoading, errorMessage } = useNavbar();
  if (isLoading) {
    return <GridCollectionsLoader />;
  }
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return (
    <div>
      <CollectionGrid collectionData={navbarData} />
    </div>
  );
};

export default MasterComponent;
