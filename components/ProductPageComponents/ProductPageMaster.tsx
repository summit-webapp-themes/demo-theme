import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { WebsiteInterfaceTypes } from '../../interfaces/website-interface-types';
import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import ImageGalleryMaster from './ProductImageGallery/ImageGalleryMaster';
import ProductDetailSkeleton from './ProductDetailSkeleton';
import styles from '../../styles/components/productDetail.module.scss';
import CartDetailsTable from '../Cart/PersonalisedCart/FallbackCartComponent/CartTable';
import useCart from '../../hooks/addon-hooks/useCart';
import esStyles from '../../styles/addon-styles/productPageV2Components.module.scss';
import ESBreadCrumbs from '../ESBreadCrumbs';
import PageHeaderWithBackBtn from '../Cart/PersonalisedCart/FallbackCartComponent/PageHeaderWithBackBtn';
import FallbackProductDetails from './ProductInformationComponents/FallbackProductDetails/FallbackProductDetails';
import useHandleProductData from '../../hooks/addon-hooks/useHandleProductData';
import ProductCard from '../../cards/addon-cards/EuroShineCard';

type ProductPageComponentsTypes = {
  productPageComponents: WebsiteInterfaceTypes;
};

function ProductPageMaster({ productPageComponents }: ProductPageComponentsTypes) {
  const {
    productDetailData,
    setProductDetailData,
    productVariantData,
    isLoading,
    errorMessage,
    handleMultipleQtyChange,
    itemList,
    qty,
    handleQtyModificationOnInputEdit,
    handleQtyModificationOnButtonClick,
    handleStockAvailabilityData,
    stockAvailabilityData,
    userEnteredPinCode,
    getPincodesList,
    checkPinCodeExists,
    validPinCode,
  } = useProductDetail();
  const {
    cartData,
    btnLoader,
    setError,
    error,
    itemsUpdating,
    handleMainQuantityChange,
    handleQuantityChange,
    handleDeleteItem,
    quantity,
    handleAddToCart,
  } = useCart();
  const {
    selectedMetal,
    selectedPurity,
    selectedTone,
    selectedDiamond,
    selectedSize,
    stmpInst,
    dmPrdInst,
    szInst,
    spcRem,
    subRem,
    setClearSelectedState,
    setProductState,
  } = useHandleProductData(productDetailData, setError);
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const [selectedImageBasedOnSelectedTone, setSelectedImageBasedOnSelectedTone] = useState<number>(0);
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);

  function getImageUrlBasedOnSelectedTone(selectedTone: string) {
    const imgs = productDetailData?.imgUrl || [];
  
    const toneSuffixArray: string[] = imgs.map((img: string) => {
      const dotIndex = img.lastIndexOf(".");
      const imgPath = dotIndex !== -1 ? img.substring(0, dotIndex) : img;
  
      return imgPath.charAt(imgPath.length - 1);
    });
  
    const matchedImageIndex = toneSuffixArray.findIndex(
      (s: string) => s === selectedTone
    );
  
    setSelectedImageBasedOnSelectedTone(matchedImageIndex);
  }
  
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);

  useEffect(() => {
    getImageUrlBasedOnSelectedTone(productDetailData?.OdDmCol)
  }, [productDetailData]);

  function renderHeaderComponents() {
    if (productPageComponents?.top_section_component?.length === 0) return;

    if ((productPageComponents?.top_section_component ?? []).length > 0) {
      return productPageComponents?.top_section_component?.map((component: any) => {
        const Component = require(`./${component.section_name}/${component?.component_name}/MasterComponent`).default;
        return (
          <section key={component.component_name}>
            <div className="my-2">
              <Component key={component?.component_name} />
            </div>
          </section>
        );
      });
    }
  }
  function renderProductInformationComponents() {
    if (!productDetailData || !productPageComponents) return null;

    const imageCol = productPageComponents?.magnified_image_component && (
      <div className={`col-md-6 ${esStyles.productImagesContainer}`}>
        <div className={esStyles.productImagesWrapper}>
          <ImageGalleryMaster
            imageGalleryComponent={productPageComponents.magnified_image_component}
            slideShowImages={productDetailData.imgUrl ? productDetailData.imgUrl : []}
            selectedImageBasedOnSelectedTone={selectedImageBasedOnSelectedTone}
            setSelectedImageBasedOnSelectedTone={setSelectedImageBasedOnSelectedTone}
          />
        </div>
      </div>
    );
    
    let infoCol = null;
    switch (productPageComponents.product_information_component) {
      case 'Standard Product Information': {
        const StandardProductInformation =
          require('./ProductInformationComponents/StandardProductInformation/ProductDetailDescribtionSection').default;
        infoCol = (
          <StandardProductInformation
            key="StandardProductInformation"
            productDetailData={productDetailData}
            pinCode={userEnteredPinCode}
            getPincodesList={getPincodesList}
            checkPinCodeExists={checkPinCodeExists}
            validPinCode={validPinCode}
            handleQtyModificationOnInputEdit={handleQtyModificationOnInputEdit}
            handleQtyModificationOnButtonClick={handleQtyModificationOnButtonClick}
            productVariantData={productVariantData}
            handleStockAvailabilityData={handleStockAvailabilityData}
            itemList={itemList}
            handleMultipleQtyChange={handleMultipleQtyChange}
            qty={qty}
            selectedMultiLangData={selectedMultiLangData}
            cartData={cartData}
          />
        );
        break;
      }
      case 'Fallback Product Information': {
        const foundCartGroup = cartData?.cart?.find((group: any) => group.item_name === productDetailData?.OdDmCd);
        const matchedCartGroup = foundCartGroup ? [foundCartGroup] : [];
        const FallbackProductInformation =
          require('./ProductInformationComponents/FallbackProductInformation/FallbackProductInformation').default;
        infoCol = (
          <>
            <div className={`col-md-6 ${esStyles.productInfoContainer}`}>
              <FallbackProductInformation
                key="FallbackProductInformation"
                productDetailData={productDetailData}
                setProductDetailData={setProductDetailData}
                cartData={cartData}
                setError={setError}
                error={error}
                handleMainQuantityChange={handleMainQuantityChange}
                quantity={quantity}
                handleAddToCart={handleAddToCart}
                btnLoader={btnLoader}
                getImageUrlBasedOnSelectedTone={getImageUrlBasedOnSelectedTone}
                selectedMetal={selectedMetal}
                selectedPurity={selectedPurity}
                selectedTone={selectedTone}
                selectedDiamond={selectedDiamond}
                selectedSize={selectedSize}
                stmpInst={stmpInst}
                dmPrdInst={dmPrdInst}
                szInst={szInst}
                spcRem={spcRem}
                subRem={subRem}
                setProductState={setProductState}
                setClearSelectedState={setClearSelectedState}
              />
            </div>
            {productDetailData?.similarDesigns?.length > 0 && (
              <div className={`row m-0 gap-2 ${esStyles.productCartTableContainer}`}>
                <p className={`m-0 p-0 fw-semibold`} style={{ color: '#000000', fontSize: '16px', lineHeight: '16px'}}>Suggested Products</p>
                <div className={`row m-0 p-0 overflow-x-scroll flex-nowrap ${esStyles.hideScrollbar}`}>
                  {productDetailData?.similarDesigns.map((product: any, i: number) => (
                    <ProductCard key={i} data={product} classNames='mb-0' style={{ maxWidth: '220px', minWidth: '200px', padding: '0 12px 0 0'}} />
                  ))}
                </div>
              </div>
            )}
            {matchedCartGroup?.length > 0 && (
              <div className={esStyles.productCartTableContainer}>
                <div className={esStyles.productCartTableWrapper}>
                  {matchedCartGroup?.map((cartGroup: any, index: number) => (
                    <CartDetailsTable
                      key={`cart-${index}`}
                      pageType='Product Details'
                      cartGroup={cartGroup}
                      itemsUpdating={itemsUpdating}
                      handleQuantityChange={handleQuantityChange}
                      handleDeleteItem={handleDeleteItem}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className={` pb-3 ${esStyles.productCartTableContainer}`}>
              <div className={esStyles.productCartTableWrapper}>
                <FallbackProductDetails 
                  productDetailData={productDetailData}
                  stmpInst={stmpInst}
                  dmPrdInst={dmPrdInst}
                  szInst={szInst}
                  spcRem={spcRem}
                  subRem={subRem}
                  setProductState={setProductState}
                  setClearSelectedState={setClearSelectedState} 
                />
              </div>
            </div>
          </>
        );
        break;
      }
    }

    return (
      <div className='m-0 p-0'>
        <div className={esStyles.breadcrumbSection}>
          <ESBreadCrumbs />
        </div>
        <div className="row m-0 p-0">
          {imageCol}
          {infoCol}
        </div>
      </div>
    );
  }

  function renderProductPageBottomSectionComponents() {
    if (productPageComponents?.bottom_section_component?.length === 0) return;

    if ((productPageComponents?.bottom_section_component ?? []).length > 0) {
      return (
        <div className="row">
          {productPageComponents?.bottom_section_component?.map((component: any) => {
            const Component = require(`./${component.section_name}/${component?.component_name}/MasterComponent`).default;
            return (
              <section key={component.component_name}>
                <div className="col-12 mt-3">
                  <Component key={component?.component_name} />
                </div>
              </section>
            );
          })}
        </div>
      );
    }
  }

  if (isLoading) {
    return (
      <div className={`container ${styles.detailContainer} `}>
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (productDetailData && Object?.keys(productDetailData)?.length > 0) {
    return (
      <div className={`${styles.detailContainer} w-100`}>
        {renderHeaderComponents()}
        <div className="row m-0">
          {renderProductInformationComponents()}
          {renderProductPageBottomSectionComponents()}
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  return <></>;
}

export default ProductPageMaster;
