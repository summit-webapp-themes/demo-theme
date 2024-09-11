import { useSelector } from 'react-redux';
import useCheckout from '../../hooks/CheckoutPageHook/useCheckout';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import WebCheckout from './WebCheckout';

export default function CheckoutPageMaster() {
  const { selectedLanguageData }: any = useSelector(SelectedFilterLangDataFromStore);
  useCheckout();
<<<<<<< HEAD
  return <h3>Check</h3>;
=======
  return (
    <div className="container margin_from_nav">
      <div className="page_heading ps-4 ms-1">
        <h4 className="color-black mb-0">{selectedLanguageData?.checkout_page}</h4>
        <WebCheckout selectedLanguageData={selectedLanguageData} />
      </div>
    </div>
  );
>>>>>>> upstream/master
}
