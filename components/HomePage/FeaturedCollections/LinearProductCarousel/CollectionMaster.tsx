import Image from 'next/image';
import { useSelector } from 'react-redux';
import useAddToCartHook from '../../../hooks/CartPageHook/useAddToCart';
import useDisplayTagHooks from '../../../hooks/HomePageHooks/useFeaturedCollections';
import ErrorImage from '../../../public/assets/images/error-icon.png';
import { selectWishlist } from '../../../store/slices/wishlist-slices/wishlist-local-slice';
import CollectionsData from './CollectionsData';
import CollectionsLoading from './CollectionsLoading';
import { selectCart } from '../../../store/slices/cart-slices/cart-local-slice';
import FeaturedCollections from './FeaturedCollections';

const CollectionMaster = () => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useDisplayTagHooks();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <CollectionsLoading />;
  } else if (allTagsData?.length > 0) {
    return (
      <>
        <FeaturedCollections
          allTagsData={allTagsData}
          addToCartItem={addToCartItem}
          getPartyName={getPartyName}
          wishlistData={wishlistData}
        />
        <CollectionsData allTagsData={allTagsData} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />
      </>
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

export default CollectionMaster;
