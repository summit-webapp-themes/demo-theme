import React from 'react';
import ProductDetailImage1 from './ProductDetailImage1';
import ProductDetailImage2 from './ProductDetailImage2';
import ProductDetailImage3 from './ProductDetailImage3';

const ProductDetailImageMaster = ({ data }: any) => {
  return (
    <>
      {/* <ProductDetailImage1 data={data} /> */}
      {/* <ProductDetailImage2 data={data} /> */}
      <ProductDetailImage3 data={data} />
    </>
  );
};

export default ProductDetailImageMaster;
