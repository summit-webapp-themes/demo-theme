import { useRouter } from 'next/router';
import layoutData from '../summit-settings.json';

interface LayoutProps {
  children: React.ReactNode;
  componentProps?: any; // Define this properly if you know the structure
}
const apiResponseOfLayoutData: any = layoutData;
function Layout({ children, componentProps }: LayoutProps) {
  const router = useRouter();
  const toShowHeader =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' || !apiResponseOfLayoutData?.data?.show_header ? false : true;

  const toShowFooter =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' || !apiResponseOfLayoutData?.data?.show_footer ? false : true;

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
      {children}
      {toShowFooter && <FooterRenderer />}
    </>
  );
}
export default Layout;
