import React from 'react';
import style from '../../../styles/components/productPage.module.scss';

const AddToCartBtn = () => {
  return (
    <div className="px-sm-3  ">
      <button className={`${style?.addToCartBtn}`}>Add To Cart</button>
    </div>
  );
};

export default AddToCartBtn;
