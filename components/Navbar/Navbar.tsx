import useNavbar from '../../hooks/GeneralHooks/useNavbar';
import WebNavBar from './WebNavBar';
import useMultilangHook from '../../hooks/LanguageHook/Multilanguages-hook';

function Navbar() {
  const { navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser } = useNavbar();
  const { multiLanguagesData, selectedLang, handleLanguageChange } = useMultilangHook();
  return (
    <WebNavBar
      navbarData={navbarData}
      isLoading={isLoading}
      errorMessage={errorMessage}
      selectedCurrencyValue={selectedCurrencyValue}
      handleLogoutUser={handleLogoutUser}
      multiLanguagesData={multiLanguagesData}
      selectedLang={selectedLang}
      handleLanguageChange={handleLanguageChange}
    />
  );
}

export default Navbar;
