import React from 'react';
import style from '../../../styles/components/productPage.module.scss';

interface AddToCartBtnPropTypes {
  handleAddToSingleProductData: () => void;
}

const AddToCartBtn = ({ handleAddToSingleProductData }: AddToCartBtnPropTypes) => {
  return (
    <div className="px-sm-3  ">
      <button className={`${style?.addToCartBtn}`} onClick={handleAddToSingleProductData}>
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
