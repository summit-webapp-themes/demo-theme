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
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' ? false : true;

  const toShowFooter =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' ? false : true;

  const HeaderRenderer = () => {
    if ('data' in apiResponseOfLayoutData) {
      if ('header_component' in apiResponseOfLayoutData?.data && apiResponseOfLayoutData?.data.header_component !== '') {
        const Component = require(`./Navbar/${apiResponseOfLayoutData?.data.header_component}/MasterComponent`).default;
        return <Component key="navbar-component" />;
      }
    }
    return null;
  };
  const FooterRenderer = () => {
    if ('data' in apiResponseOfLayoutData) {
      if ('footer_component' in apiResponseOfLayoutData?.data && apiResponseOfLayoutData?.data.footer_component !== '') {
        const Component = require(`./Footer/${apiResponseOfLayoutData?.data.footer_component}/MasterComponent`).default;
        return <Component key="footer-component" />;
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
