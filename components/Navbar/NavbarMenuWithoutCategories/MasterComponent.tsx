import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import styles from '../../../styles/components/navbarWithoutCategories.module.scss';
const MasterComponent = () => {
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
        <button type="button" className={styles.iconButton}>
          <FaUser />
        </button>
        <button type="button" className={styles.iconButton}>
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default MasterComponent;
