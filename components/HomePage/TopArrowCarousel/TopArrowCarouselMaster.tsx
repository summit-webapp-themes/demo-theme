import { useSelector } from 'react-redux';
import useAddToCartHook from '../../../hooks/CartPageHook/useAddToCart';
import useDisplayTagHooks from '../../../hooks/HomePageHooks/useFeaturedCollections';
import { selectWishlist } from '../../../store/slices/wishlist-slices/wishlist-local-slice';
import TopArrowSlider from './TopArrrowSlider';

function TopArrowCarouselMaster() {
  const { allTagsData, isLoading, errorMessage } = useDisplayTagHooks();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;
  return <TopArrowSlider data={allTagsData} addToCartItem={addToCartItem} getPartyName={getPartyName} wishlistData={wishlistData} />;
}

export default TopArrowCarouselMaster;
