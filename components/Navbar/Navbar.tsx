import useNavbar from '../../hooks/GeneralHooks/useNavbar';
import WebNavBar from './WebNavBar';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import { useSelector } from 'react-redux';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { selectWishlist } from '../../store/slices/wishlist-slices/wishlist-local-slice';

function Navbar() {
  const { navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser } = useNavbar();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  const cartCount = useSelector(selectCart)?.cartCount
  const wishlistCount = useSelector(selectWishlist)?.wislistCount
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
    />
  );
}

export default Navbar;
