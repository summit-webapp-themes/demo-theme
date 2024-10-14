import React from 'react';
import useFeaturedCollections from '../../../../hooks/HomePageHooks/useFeaturedCollections';
import TabbedData from './TabbedData';
import useAddToCartHook from '../../../../hooks/CartPageHook/useAddToCart';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../../../store/slices/wishlist-slices/wishlist-local-slice';
import TabbedFeatureSkeleton from './TabbedFeatureSkeleton';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import Image from 'next/image';

type Props = {};

const TabbedCollectionMaster = (props: Props) => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useFeaturedCollections();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <TabbedFeatureSkeleton />;
  }

  if (allTagsData && allTagsData?.length > 0) {
    return (
      <div className="card border-0 my-5">
        <TabbedData data={allTagsData} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
      </div>
    );
  }
  if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }

  return <></>;
};

export default TabbedCollectionMaster;
