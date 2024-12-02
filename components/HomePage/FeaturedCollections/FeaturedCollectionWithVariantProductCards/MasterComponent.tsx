import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectWishlist } from '../../../../store/slices/wishlist-slices/wishlist-local-slice';
import useAddToCartHook from '../../../../hooks/CartPageHook/useAddToCart';
import useDisplayTagHooks from '../../../../hooks/HomePageHooks/useFeaturedCollections';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import { selectCart } from '../../../../store/slices/cart-slices/cart-local-slice';
import FeaturedCollectionWithColorVariants from './FeaturedCollectionWithVariantProductCards';
import FeaturedCollectionWithVariantProductCardsLoading from './FeaturedCollectionWithVariantProductCardsLoading';

const MasterComponent = () => {
  const { allTagsData, fetchDisplayTagsDataFunction, isLoading, errorMessage } = useDisplayTagHooks();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;
  const cartData = useSelector(selectCart).items;

  if (isLoading) {
    return <FeaturedCollectionWithVariantProductCardsLoading />;
  } else if (allTagsData?.length > 0) {
    return (
      <FeaturedCollectionWithColorVariants
        allTagsData={allTagsData}
        cartData={cartData}
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

export default MasterComponent;
