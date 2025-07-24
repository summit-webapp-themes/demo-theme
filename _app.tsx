import '../i18n/i18n';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import summitSettings from '../summit-settings.json';
import { createFontImport } from '../utils/fontUtils';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { CONSTANTS } from '../services/config/app-config';
import { persistor, store } from '../store/store';
import useInitializeGoogleAnalytics from '../hooks/GoogleAnalytics/useInitializeGoogleAnalytics';
import ErrorBoundary from '../components/ErrorBoundary';
import useLanguageHandler from '../hooks/GeneralHooks/LanguageHandler';
const Layout = dynamic(() => import('../components/Layout'));
const ProtectedRoute = dynamic(() => import('../routes/ProtectedRoute'));
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
const summitSettingsData: any = summitSettings;
const fontFamily = summitSettingsData?.data?.font_family || 'Nunito';
const dynamicFont = createFontImport(fontFamily);
function InnerApp({ Component, pageProps }: AppProps) {
  useLanguageHandler();
  const { ENABLE_GOOGLE_ANALYTICS, ALLOW_GUEST_TO_ACCESS_SITE_EVEN_WITHOUT_AUTHENTICATION } = CONSTANTS;
  useEffect(() => {
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