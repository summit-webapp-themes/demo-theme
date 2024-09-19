import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';

const AddToCartBtn = ({ handleAddToCart, selectedMultiLangData }: any) => {
  return (
    <button onClick={() => handleAddToCart()} className={`border-0 px-5 py-2 rounded-1 my-3 ${styles.buttonBackGround}`}>
      {selectedMultiLangData?.add_to_cart}
    </button>
  );
};

export default AddToCartBtn;
