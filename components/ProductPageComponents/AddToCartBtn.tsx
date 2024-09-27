import React from 'react';
import styles from '../../styles/components/productDetail.module.scss';

const AddToCartBtn = ({ handleAddToCart, selectedMultiLangData, addToCartLoaderBtn }: any) => {
  return (
    <button
      onClick={() => handleAddToCart()}
      className={`border-0 px-5 py-2 rounded-1 my-3 ${styles.buttonBackGround} ${styles.detail_page_btn}`}
    >
      {addToCartLoaderBtn ? (
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      ) : (
        <>{selectedMultiLangData?.add_to_cart}</>
      )}
    </button>
  );
};

export default AddToCartBtn;
