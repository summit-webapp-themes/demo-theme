import Link from 'next/link';
import styles from '../../styles/components/variantProductCards.module.scss';
import { IoEyeOutline, IoCartOutline } from 'react-icons/io5';

interface VariantProductCardsButtonPropTypes {
  handleRedirectToProductDetailPage: () => void;
  handleAddToProductData: () => void;
  addToCartLoaderBtn: boolean;
}

const VariantProductCardsButton = ({
  handleRedirectToProductDetailPage,
  handleAddToProductData,
  addToCartLoaderBtn,
}: VariantProductCardsButtonPropTypes) => {
  return (
    <div className={styles.varients_btns}>
      <div className={styles.quickShop_btn} onClick={() => handleRedirectToProductDetailPage()}>
        <span className={styles.quickShop}>Quick View</span>
        <span className={styles.quickIcon}>
          <IoEyeOutline />
        </span>
      </div>
      <div className={styles.quickShop_btn} onClick={() => handleAddToProductData()}>
        <span className={styles.quickShop}>Quick Shop</span>
        {addToCartLoaderBtn ? (
          <div className={`spinner-border spinner-border-sm `} role="status"></div>
        ) : (
          <span className={styles.quickIcon}>
            <IoCartOutline />
          </span>
        )}
      </div>
    </div>
  );
};

export default VariantProductCardsButton;
