import useNavbar from '../../hooks/GeneralHooks/useNavbar';
import WebNavBar from './WebNavBar';
import useMultilangHook from '../../hooks/LanguageHook/Multilanguages-hook';

function Navbar() {
  const { navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser } = useNavbar();
  const { multiLanguagesData } = useMultilangHook();
  return (
    <WebNavBar
      navbarData={navbarData}
      isLoading={isLoading}
      errorMessage={errorMessage}
      selectedCurrencyValue={selectedCurrencyValue}
      handleLogoutUser={handleLogoutUser}
      multiLanguagesData={multiLanguagesData}
    />
  );
}

export default Navbar;
