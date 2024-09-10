import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import styles from '../../styles/components/productDetail.module.scss';
import React, { useState } from 'react';
import ProductDetailImageGallery from './ProductDetailImageGallery';
import ProductDetailDescribtionSection from './ProductDetailDescribtionSection';
import ProductDetailSpecsAndTech from './ProductDetailSpecsAndTech';

function ProductPageMaster() {
  const { productDetailData, productVariantData, isLoading,errorMessage } = useProductDetail();
  const [quantity, setQuantity] = useState(productDetailData?.min_order_qty || 0);
  const [pinCode, setPinCode] = useState('');
  const [tab, setTab] = useState('SPECIFICATION');

  return (
    <div className={`container ${styles.detailContainer} `}>
      {
       errorMessage ? 
       <div>{errorMessage}</div> :
      isLoading ? (
        <div>Loading...</div>
      ) :
      (
        <div className="row">
          <div className="col-lg-6 p-4">
            <div className="">{productDetailData?.slide_img && <ProductDetailImageGallery data={productDetailData?.slide_img} />}</div>
          </div>
          <div className="col-lg-6 p-4">
            <ProductDetailDescribtionSection
              productDetailData={productDetailData}
              quantity={quantity}
              pinCode={pinCode}
              setQuantity={setQuantity}
            />
          </div>
          <div className="col-12 mt-4">
            <div className="row">
              <ProductDetailSpecsAndTech productDetailData={productDetailData} tab={tab} setTab={setTab} />
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPageMaster;
