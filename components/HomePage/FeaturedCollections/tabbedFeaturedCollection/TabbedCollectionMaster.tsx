import React from 'react';
import useFeaturedCollections from '../../../../hooks/HomePageHooks/useFeaturedCollections';

type Props = {};

const TabbedCollectionMaster = (props: Props) => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useFeaturedCollections();
  console.log(allTagsData, 'All Tags Data');
  return <div>TabbedCollectionMaster</div>;
};

export default TabbedCollectionMaster;
