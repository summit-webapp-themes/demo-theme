import React from 'react';
import style from '../../../styles/components/productPage.module.scss';

const AddToCartBtn = () => {
  return (
    <div>
      <button className={`${style?.addToCartBtn}`}>Add To Cart</button>
    </div>
  );
};

export default AddToCartBtn;
