import Link from 'next/link';
import styles from '../../../styles/addon-styles/navbarWithoutCategoriesV2.module.scss';
import { IoIosSearch } from 'react-icons/io';
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import Image from 'next/image';
import Logo from '../../../public/assets/images/LogoAtelierReya.svg';
import { Button, Dropdown } from 'react-bootstrap';
import { resetStore } from '../../../store/slices/auth/logout-slice';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorageListener } from '../../../hooks/addon-hooks/useLocalStorageListener';
import { CartItemType } from '../../../interfaces/cartType';
import { selectCart } from '../../../store/slices/cart-slices/cart-local-slice';
import { FiLogOut } from 'react-icons/fi';
export default function FallbackNavbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartCount } = useSelector(selectCart);

  return (
    <div className={styles.header}>
      {/* Logo */}
      <a href="/" className={styles.logo}>
        <Image src={Logo} alt="Logo Image" fill style={{ objectFit: 'cover' }} />
      </a>

      {/* Search Bar */}
      {/* <div className={styles.searchContainer}>
        <button type="button" className={styles.searchIcon}>
          <IoIosSearch />
        </button>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div> */}

      {/* User & Cart Buttons */}
      <div className={styles.actions}>
        <Link href="/cart" title="Cart" className={styles.iconButton}>
          <HiOutlineShoppingBag />
          <span className={styles.iconButtonBadge}>{cartCount}</span>
        </Link>
        <Button
          title="Logout"
          variant="outline-light"
          className={styles.iconButton}
          onClick={() => {
            dispatch(resetStore());
            localStorage.clear();
            router.push('/login');
          }}
        >
          <FiLogOut size={17} />
        </Button>
      </div>
    </div>
  );
}
