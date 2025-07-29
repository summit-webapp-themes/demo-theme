import '../i18n/i18n';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import summitSettings from '../summit-settings.json';
import { createFontImport } from '../utils/fontUtils';
import dynamic from 'next/dynamic';
import { Provider, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { CONSTANTS } from '../services/config/app-config';
import { persistor, store } from '../store/store';
import useInitializeGoogleAnalytics from '../hooks/GoogleAnalytics/useInitializeGoogleAnalytics';
import ErrorBoundary from '../components/ErrorBoundary';
const Layout = dynamic(() => import('../components/Layout'));
const ProtectedRoute = dynamic(() => import('../routes/ProtectedRoute'));
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
import { setCurrencyValue } from '../store/slices/general_slices/multi-currency-slice';
import { setLanguage } from '../store/slices/general_slices/multilingual-slice';
import { currencyDisplayOptions, currencyOptions } from '../utils/addon-utils/currency-map';
import { languageDisplayOptions } from '../utils/addon-utils/language-options';
import { Option } from '../store/slices/general_slices/multilingual-slice';
import useCurrencyLanguageHandler from '../hooks/GeneralHooks/LanguageHandler';

const summitSettingsData: any = summitSettings;
const fontFamily = summitSettingsData?.data?.font_family || 'Nunito';
const dynamicFont = createFontImport(fontFamily);
function InnerApp({ Component, pageProps }: AppProps) {
  const { ENABLE_GOOGLE_ANALYTICS, ALLOW_GUEST_TO_ACCESS_SITE_EVEN_WITHOUT_AUTHENTICATION } = CONSTANTS;
  const { handleLanguageShallowUpdate, handleCurrencyShallowUpdate } = useCurrencyLanguageHandler();
  
  useEffect(() => {
    const storedCurrency = localStorage.getItem('selected_currency');
    const storedLanguage = localStorage.getItem('selected_language');
    const currency = currencyDisplayOptions.find((opt: Option) => storedCurrency && opt?.value === storedCurrency);
    const language = languageDisplayOptions.find((opt: Option) => storedLanguage && opt?.label === storedLanguage);
    
    if (storedCurrency && currency) {
      handleCurrencyShallowUpdate(currency);
    }
    
    if (storedLanguage && language) {
      handleLanguageShallowUpdate(language);
    }

    if (ENABLE_GOOGLE_ANALYTICS) {
      useInitializeGoogleAnalytics();
    }
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        className="toast-container-below-navbar"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
      <Layout>
        {ALLOW_GUEST_TO_ACCESS_SITE_EVEN_WITHOUT_AUTHENTICATION ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </Layout>
    </>
  );
}
function MyApp(props: AppProps) {
  return (
    <div className={dynamicFont.className}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <InnerApp {...props} />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </div>
  );
}
export default MyApp;