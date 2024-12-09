import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useProductDetail from '../../../hooks/ProductDetailPageHooks/useProductDetail';
import { selectCart } from '../../../store/slices/cart-slices/cart-local-slice';
import { SelectedFilterLangDataFromStore } from '../../../store/slices/general_slices/selected-multilanguage-slice';
import BreadCrumbs from '../../BreadCrumbs';
import ProductDetailSkeleton from '../ProductDetailSkeleton';
import ProductPageHeading from './ProductPageHeading';
import ProductPageVariants from './ProductPageVariants';

function ProductPageComponentMaster() {
  const {
    productDetailData,
    productVariantData,
    isLoading,
    errorMessage,
    handleMultipleQtyChange,
    itemList,
    qty,
    handleQtyModificationOnInputEdit,
    handleQtyModificationOnButtonClick,
    handleStockAvailabilityData,
  } = useProductDetail();
  const [pinCode, setPinCode] = useState('');
  const [tab, setTab] = useState('SPECIFICATION');
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const cartData = useSelector(selectCart).items;
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);
  if (isLoading) {
    return (
      <div className={`container `}>
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (Object?.keys(productDetailData)?.length > 0) {
    return (
      <div className={`container-fluid w-100 ps-lg-5 pe-lg-5 `}>
        <div className="my-2">
          <BreadCrumbs />
        </div>
        <div className="row">
          <div className="col-lg-6 p-4"></div>
          <div className="col-lg-6 p-4">
            <ProductPageHeading productDetailData={productDetailData} />
            <ProductPageVariants productVariantData={productVariantData} />
          </div>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return <></>;
}

export default ProductPageComponentMaster;
