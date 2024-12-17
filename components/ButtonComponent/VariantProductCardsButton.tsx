import Link from 'next/link';
import styles from '../../styles/components/variantProductCards.module.scss';
import { IoEyeOutline, IoCartOutline } from 'react-icons/io5';
import { ReactNode } from 'react';

interface VariantProductCardsButtonPropTypes {
  handleRedirectToProductDetailPage: () => void;
  handleAddToProductData: () => void;
  handleRenderCartBtnText: () => ReactNode;
}

const VariantProductCardsButton = ({
  handleRedirectToProductDetailPage,
  handleAddToProductData,
  handleRenderCartBtnText,
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
        {handleRenderCartBtnText()}
      </div>
    </div>
  );
};

export default VariantProductCardsButton;
