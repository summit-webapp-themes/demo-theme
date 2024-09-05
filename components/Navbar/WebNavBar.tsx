import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { FaAlignJustify, FaCartPlus, FaHeart } from 'react-icons/fa6';
import logo from '../../public/assets/images/logo.png';
import stylesNavbar from '../../styles/components/navbar.module.scss';
import ProductCatagoriesNavbar from './ProductCatagoriesNavbar';

function WebNavBar({ navbarData, isLoading, errorMessage, selectedCurrencyValue, handleLogoutUser, multiLanguagesData }: any) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = localStorage.getItem('party_name')
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchTerm !== '') {
      router.push('/product/' + searchTerm);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };


  const navMenuclick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <header className={stylesNavbar.header}>
        <nav>
          <div className={`${stylesNavbar.navbar} ps-lg-5 pe-lg-4`}>
            <div className="w-100 d-flex justify-content-end pt-4">
              <div className="mobile-nav d-flex justify-content-sm-between">
                <Link href="#" legacyBehavior>
                  <a className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle" onClick={navMenuclick}>
                    <FaAlignJustify className="icon" />
                  </a>
                </Link>
              </div>
              <div className={stylesNavbar.logo}>
                <Link href="/" legacyBehavior>
                  <a>
                    <Image className="pb-2 mb-1" src={logo} alt="logo" width={250} />
                  </a>
                </Link>
              </div>
              <div className={`d-block ${stylesNavbar.search_bar}`}>
                <div className="search-input position-relative">
                  <input
                    type="text"
                    className={`form-control ${stylesNavbar.search_bar_input}`}
                    placeholder="Search here"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                    onChange={(e: any) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <FaSearch className={stylesNavbar.search_icon} />
                </div>
              </div>
              <div className={stylesNavbar.inlineList}>
                <ul className="nav  list-inline d-flex justify-content-end">
                  <li className={stylesNavbar.list_inline_item}>
                    <Link href="/cart" legacyBehavior>
                      <a className={`link-dark ${stylesNavbar.label}`}>
                        <div className={stylesNavbar.icon_container}>
                          <FaCartPlus className="icon" />
                          <span className={`${stylesNavbar.badge} ${stylesNavbar.badge_warning} text-white`}>{0}</span>
                          <span className={`d-none d-md-inline-block theme-blue ${stylesNavbar.order_list_dropdown}`}>Cart</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className={stylesNavbar.list_inline_item}>
                    <Link href="/wishlist " legacyBehavior>
                      <a className={`link-dark ${stylesNavbar.label}`}>
                        <div className={stylesNavbar.icon_container}>
                          <FaHeart className="icon" />
                          <span className={`${stylesNavbar.badge} ${stylesNavbar.badge_warning} text-white`}>{0}</span>
                          <span className={`d-none d-md-inline-block theme-blue ${stylesNavbar.order_list_dropdown}`}>Wishlist</span>
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li className={stylesNavbar.list_inline_item}>
                    <div className={stylesNavbar.icon_container}>
                      <FaUserCircle className="icon" />
                    </div>
                    <NavDropdown title={user} id="basic-nav-dropdown" className={` ${stylesNavbar.order_list_dropdown}`}>
                      <NavDropdown.Item
                        as="a"
                        className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}
                      ></NavDropdown.Item>

                      <Link href="/quick-order" passHref className="text-decoration-none">
                        <NavDropdown.Item as="a" className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}>
                          {multiLanguagesData?.quick_order}
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/quick-order" passHref className="text-decoration-none">
                        <NavDropdown.Item as="a" className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}>
                          {multiLanguagesData?.my_account}
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/quick-order" passHref className="text-decoration-none">
                        <NavDropdown.Item as="a" className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}>
                          {multiLanguagesData?.dealer_ledger}
                        </NavDropdown.Item>
                      </Link>
                      <Link href="/quick-order" passHref className="text-decoration-none">
                        <NavDropdown.Item as="a" className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}>
                          {multiLanguagesData?.view_catalogs}
                        </NavDropdown.Item>
                      </Link>

                      <Link href="#" passHref className="text-decoration-none" onClick={handleLogoutUser}>
                        <NavDropdown.Item as="a" className={`text-decoration-none ${stylesNavbar.order_list_items} custom-dropdown-item`}>
                          Sign Out
                        </NavDropdown.Item>
                      </Link>
                    </NavDropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header >
      <ProductCatagoriesNavbar
        navbarData={navbarData}
        isLoading={isLoading}
        errorMessage={errorMessage}
        selectedCurrencyValue={selectedCurrencyValue}
        multiLanguagesData={multiLanguagesData}
      />
    </>
  );
}

export default WebNavBar;
