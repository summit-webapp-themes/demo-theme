import Image from 'next/image';
import { useSelector } from 'react-redux';
import useAddToCartHook from '../../../../hooks/CartPageHook/useAddToCart';
import useDisplayTagHooks from '../../../../hooks/HomePageHooks/useFeaturedCollections';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import { selectWishlist } from '../../../../store/slices/wishlist-slices/wishlist-local-slice';
import FeaturedCollectionsInspiration1Data from './FeaturedCollectionsInspiration1Data';
import FeaturedCollectionsInspiration1Loading from './FeaturedCollectionsInspiration1Loading';

const FeaturedCollectionsInspiration1Master = () => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useDisplayTagHooks();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <FeaturedCollectionsInspiration1Loading />;
  } else if (allTagsData?.length > 0) {
    return (
      <FeaturedCollectionsInspiration1Data
        allTagsData={allTagsData}
        addToCartItem={addToCartItem}
        getPartyName={getPartyName}
        wishlistData={wishlistData}
      />
    );
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default FeaturedCollectionsInspiration1Master;
