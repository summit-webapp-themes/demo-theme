import React from 'react';
import style from '../../../styles/components/productPage.module.scss';
import { spawn } from 'child_process';

interface AddToCartBtnPropTypes {
  handleAddToSingleProductData: () => void;
  addToCartLoaderBtn: boolean;
}

const AddToCartBtn = ({ handleAddToSingleProductData, addToCartLoaderBtn }: AddToCartBtnPropTypes) => {
  return (
    <div className="px-sm-3  ">
      <button className={`${style?.addToCartBtn}`} onClick={handleAddToSingleProductData}>
        {addToCartLoaderBtn ? <div className="spinner-border spinner-border-sm " role="status"></div> : <span>Add To Cart</span>}
      </button>
    </div>
  );
};

export default AddToCartBtn;
