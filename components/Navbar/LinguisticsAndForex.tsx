// import useLinguisticsAndForexHook from '../../../hooks/GeneralHooks/NavbarHooks/LinguisticsAndForexHook';
import useMultilangHook from '../../hooks/LanguageHook/Multilanguages-hook';

const LinguisticsAndForex = () => {
  // const { handleCurrencyValueChange } = useLinguisticsAndForexHook();
  const { handleLanguageChange, multiLanguagesData, selectedLang }: any = useMultilangHook();

  return (
    <>
      <div className="mx-3">
        <select value={selectedLang} onChange={(e) => handleLanguageChange(e?.target?.value)} className="select-field cursor_pointer">
          {multiLanguagesData?.length > 0 &&
            multiLanguagesData !== null &&
            multiLanguagesData?.map((lang: any) => {
              return <option value={lang?.lang_code}>{lang?.lang_name}</option>;
            })}
        </select>
      </div>
    </>
  );
};

export default LinguisticsAndForex;
