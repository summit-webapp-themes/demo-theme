import { useRouter } from 'next/router';
// import Navbar from './Navbar/Navbar';
import nav from './Navbar/NavbarMenuLeftAligned/MasterComponent';
import layoutData from '../summit-settings.json';

interface LayoutProps {
  children: React.ReactNode;
  componentProps?: any; // Define this properly if you know the structure
}
function Layout({ children, componentProps }: LayoutProps) {
  console.log('props', componentProps);
  console.log('sasa');
  const router = useRouter();
  const toShowHeader =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' ? false : true;
  const toShowFooter =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' ? false : true;

  const LayoutRenderer = () => {
    const Component = require(`./Navbar/${layoutData?.data.header_component}/MasterComponent`).default;
    return <Component key="navbar-component" />;
  };
  // return (
  //   <>
  //     {toShowHeader && <Navbar />}
  //     {children}
  //   </>
  // );
  return (
    <>
      {toShowHeader && LayoutRenderer()}
      {children}
    </>
  );
}
export default Layout;
