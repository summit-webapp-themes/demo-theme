import { useState } from 'react';
import dynamic from 'next/dynamic';
import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import ProductDetailImageGallery from './ProductDetailImageGallery';
import ProductDetailDescribtionSection from './ProductDetailDescribtionSection';
import ProductDetailSpecsAndTech from './ProductDetailSpecsAndTech';
import BreadCrumbs from '../BreadCrumbs';
import ProductDetailSkeleton from './ProductDetailSkeleton';
const ReviewMaster = dynamic(() => import('../Reviews/ReviewMaster'));
const MatchingProducts = dynamic(() => import('./MatchingProducts'));
import styles from '../../styles/components/productDetail.module.scss';

function ProductPageMaster() {
  const { productDetailData, productVariantData, isLoading, errorMessage } = useProductDetail();
  const [quantity, setQuantity] = useState();
  const [pinCode, setPinCode] = useState('');
  const [tab, setTab] = useState('SPECIFICATION');

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  if (isLoading) {
    return (
      <div className={`container ${styles.detailContainer} `}>
        <ProductDetailSkeleton />
      </div>
    );
  }
  return (
    <div className={`container-fluid ${styles.detailContainer} w-100 ps-lg-5 pe-lg-5 `}>
      <div className="my-2">
        <BreadCrumbs />
      </div>
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
        </div>
      </div>
      <ReviewMaster />
      <MatchingProducts />
    </div>
  );
}

export default ProductPageMaster;
