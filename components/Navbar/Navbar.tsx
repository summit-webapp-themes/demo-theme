import useNavbar from '../../hooks/GeneralHooks/useNavbar';
import WebNavBar from './WebNavBar';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import { useSelector } from 'react-redux';

function Navbar() {
  const { navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser } = useNavbar();
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  return (
    <WebNavBar
      navbarData={navbarData}
      isLoading={isLoading}
      errorMessage={errorMessage}
      selectedCurrencyValue={selectedCurrencyValue}
      handleLogoutUser={handleLogoutUser}
      selectedLanguageData={selectedLanguageData}
    />
  );
}

export default Navbar;
