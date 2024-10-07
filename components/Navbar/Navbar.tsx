import useNavbar from '../../hooks/GeneralHooks/useNavbar';
import WebNavBar from './WebNavBar';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { selectWishlist } from '../../store/slices/wishlist-slices/wishlist-local-slice';
import useFetchCartItems from '../../hooks/CartPageHook/useFetchCartItems';
import useWishlist from '../../hooks/WishlistHooks/useWishlistHook';

function Navbar() {
  const { navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser, isLoggedIn } = useNavbar();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const { cartCount } = useFetchCartItems();
  const { wishlistCount } = useWishlist();
  return (
    <WebNavBar
      navbarData={navbarData}
      isLoading={isLoading}
      errorMessage={errorMessage}
      selectedCurrencyValue={selectedCurrencyValue}
      handleLogoutUser={handleLogoutUser}
      selectedLanguageData={selectedLanguageData}
      cartCount={cartCount}
      wishlistCount={wishlistCount}
      isLoggedIn={isLoggedIn}
    />
  );
}

export default Navbar;
