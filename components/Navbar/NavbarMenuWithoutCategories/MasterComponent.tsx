import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import useFetchCartItems from '../../../hooks/CartPageHook/useFetchCartItems';
import styles from '../../../styles/components/navbarWithoutCategories.module.scss';
const MasterComponent = () => {
  const { cartCount } = useFetchCartItems();
  return (
    <header className={styles.header}>
      {/* Logo / Site Name */}
      <div className={styles.logo}>
        <a href="/" style={{ color: '#000', textDecoration: 'none' }}>
          Euroshine
        </a>
      </div>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <button type="button" className={styles.iconButton}>
          <FaSearch />
        </button>
      </div>

      {/* User & Cart Icons */}
      <div className={styles.actions}>
        <Link href="/login" className={styles.iconButton} style={{ textDecoration: 'none', color: '#000' }}>
          <FaUser />
        </Link>
        <Link href="/cart" className={styles.iconButton} style={{ textDecoration: 'none', color: '#000' }}>
          <FaShoppingCart />
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '14px',
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default MasterComponent;
