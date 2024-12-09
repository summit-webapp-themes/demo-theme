import React from 'react';
import styles from '../../../styles/components/productPage.module.scss';
import { Rating } from 'react-simple-star-rating';

const ProductPageHeading = ({ productDetailData }: any) => {
  console.log(productDetailData, 'data111');
  return (
    <div>
      <h1 className={styles.prodcut_title}>{productDetailData?.item_name}</h1>
      <div className="row mb-4">
        <div className={`col-6 ${styles.price}`}>{`₹ ${productDetailData?.price}`}</div>
        <div className={`col-6 `}>
          <Rating initialValue={productDetailData?.rating} size={25} readonly />
          <span>(3 reviews)</span>
        </div>
      </div>
      <p>{productDetailData?.description}</p>
    </div>
  );
};

export default ProductPageHeading;
