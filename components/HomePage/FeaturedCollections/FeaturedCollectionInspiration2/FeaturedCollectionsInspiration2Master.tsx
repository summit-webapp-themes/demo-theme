import React from 'react';
import useFeaturedCollections from '../../../../hooks/HomePageHooks/useFeaturedCollections';
import useAddToCartHook from '../../../../hooks/CartPageHook/useAddToCart';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../../../store/slices/wishlist-slices/wishlist-local-slice';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import Image from 'next/image';
import FeaturedCollectionsLoading from '../FeaturedCollectionInspiration1/FeaturedCollectionsInspiration1Loading';
import FeaturedCollectionsInspiration2Data from './FeaturedCollectionsInspiration2Data';
import FeaturedCollectionsInspiration2Loading from './FeaturedCollectionsInspiration2Loading';

type Props = {};

const FeaturedCollectionsInspiration2Master = (props: Props) => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useFeaturedCollections();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <FeaturedCollectionsInspiration2Loading />;
  }

  if (allTagsData && allTagsData?.length > 0) {
    return (
      <div className="card border-0 my-5">
        <FeaturedCollectionsInspiration2Data
          data={allTagsData}
          addToCartItem={addToCartItem}
          getPartyName={getPartyName}
          wishlistData={wishlistData}
        />
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
export default FeaturedCollectionsInspiration2Master;
