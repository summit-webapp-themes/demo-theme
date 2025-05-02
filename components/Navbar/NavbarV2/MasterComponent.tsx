import Link from 'next/link';
import useFetchCartItems from '../../../hooks/CartPageHook/useFetchCartItems';
import styles from '../../../styles/components/navbarWithoutCategoriesV2.module.scss';
import { IoIosSearch } from 'react-icons/io';
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import Image from 'next/image';
import Logo from '../../../public/assets/images/LogoAtelierReya.png';

export default function MasterComponent() {
  const { cartCount } = useFetchCartItems();

  return (
    <div className={styles.header}>
      {/* Logo */}
      <a href='/' className={styles.logo}>
        <Image src={Logo} alt='Logo Image' fill style={{ objectFit: 'cover'}}/>
      </a>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <button type="button" className={styles.searchIcon}>
          <IoIosSearch />
        </button>
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>

      {/* User & Cart Buttons */}
      <div className={styles.actions}>
        <Link href="/cart" className={styles.iconButton}>
          <HiOutlineShoppingBag />
          <span
            className={styles.iconButtonBadge}
          >
            {cartCount}
          </span>
        </Link>
        <Link href="/login" className={styles.iconButton}>
          <HiOutlineUser />
        </Link>
      </div>
    </div>
  );
}