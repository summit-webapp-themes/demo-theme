import React, { ReactNode } from 'react';
import styles from '../../../styles/components/productCardListView.module.scss';

interface ProductListViewActionButtonsPropTypes {
  handleRedirectToProductDetailPage: () => void;
  handleAddToProductData: () => void;
  handleRenderCartBtnText: () => ReactNode;
}
const ProductListViewActionButtons = ({
  handleRedirectToProductDetailPage,
  handleAddToProductData,
  handleRenderCartBtnText,
}: ProductListViewActionButtonsPropTypes) => {
  return (
    <div>
      <button className={`${styles.quick_shop_btn} mb-2 w-100`} onClick={handleRedirectToProductDetailPage}>
        <span>Quick View</span>
      </button>
      <button className={`${styles.add_to_cart_btn} w-100`} onClick={handleAddToProductData}>
        {handleRenderCartBtnText()}
      </button>
    </div>
  );
};

export default ProductListViewActionButtons;
