import { useRouter } from 'next/router';
import layoutData from '../summit-settings.json';
import { Modal } from 'react-bootstrap';
import { IoWarningOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { get_access_token, setShowSessionExpiredModalFalse } from '../store/slices/auth/token-login-slice';
import { useTranslation } from 'react-i18next';
import FallbackLayout from './ProductCategoriesComponents/ProductListPageLayout/FallbackLayouts/FallbackLayout';

interface LayoutProps {
  children: React.ReactNode;
  componentProps?: any; // Define this properly if you know the structure
}
const apiResponseOfLayoutData: any = layoutData;
function Layout({ children, componentProps }: LayoutProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { showSessionExpiredModal } = useSelector(get_access_token);
  const { t } = useTranslation('common');
  const toShowHeader =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' || !apiResponseOfLayoutData?.data?.show_header ? false : true;

  const toShowFooter =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' || !apiResponseOfLayoutData?.data?.show_footer ? false : true;

  const toShowFallbackLayout = 
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' || router.pathname === '/product-category';
  
  const HeaderRenderer = () => {
    if ('data' in apiResponseOfLayoutData) {
      if ('header_component' in apiResponseOfLayoutData?.data && apiResponseOfLayoutData?.data.header_component !== '') {
        switch (apiResponseOfLayoutData?.data.header_component) {
          case 'Standard Navbar':
            const StandardNavbar = require(`./Navbar/${apiResponseOfLayoutData?.data.header_component}/MasterComponent`).default;
            return <StandardNavbar key="navbar-component" />;
          case 'Fallback Navbar':
            const FallbackNavbar = require(`./Navbar/FallbackNavbar/FallbackNavbar`).default;
            return <FallbackNavbar key="navbar-component" />;
          default:
            return null;
        }
      }
    }
    return null;
  };
  const FooterRenderer = () => {
    if ('data' in apiResponseOfLayoutData) {
      if ('footer_component' in apiResponseOfLayoutData?.data && apiResponseOfLayoutData?.data.footer_component !== '') {
        switch (apiResponseOfLayoutData?.data.footer_component) {
          case 'Standard Footer':
            const StandardFooter = require(`./Footer/${apiResponseOfLayoutData?.data.footer_component}/MasterComponent`).default;
            return <StandardFooter key="footer-component" />;
          case 'Fallback Footer':
            const FallbackFooter = require(`./Footer/FallbackFooter/FallbackFooter`).default;
            return <FallbackFooter key="footer-component" />;
          default:
            return null;
        }
      }
    }
    return null;
  };

  return (
    <>
      {toShowHeader && <HeaderRenderer />}
      <div style={{ minHeight: '600px'}}>
        {toShowFallbackLayout ? (
          children
        ) : (
          <FallbackLayout page='other'>
            {children}
          </FallbackLayout>
        )}
      </div>
      {toShowFooter && <FooterRenderer />}
      <Modal show={showSessionExpiredModal} centered>
        <Modal.Body className="d-flex flex-column gap-3 align-items-center pb-0 m-3">
          <IoWarningOutline className=' text-danger' size={32} />
          <p className="h6 m-0 fw-medium text-center" style={{ color: '#2B2B2B' }}>
            {t('your_session_has_expired_login_to_continue')}
          </p>
          <button
            style={{ width: 'fit-content'}}
            className={`btn btn-outline bg-danger text-white py-2 mx-0 my-3 h6 px-5`}
            onClick={() => {
              router.push('/login');
              dispatch(setShowSessionExpiredModalFalse());
            }}
          >
            {t('go_to_login')}
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Layout;
