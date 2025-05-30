import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { WebsiteInterfaceTypes } from '../../interfaces/website-interface-types';
import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import ImageGalleryMaster from './ProductImageGallery/ImageGalleryMaster';
import ProductDetailSkeleton from './ProductDetailSkeleton';
import styles from '../../styles/components/productDetail.module.scss';
// import CartDetailsTable from '../Cart/PersonalisedCart/FallbackCartComponent/CartTable';
// import useCart from '../../hooks/addon-hooks/useCart';
import esStyles from '../../styles/addon-styles/productPageV2Components.module.scss';
import ESBreadCrumbs from '../ESBreadCrumbs';
// import PageHeaderWithBackBtn from '../Cart/PersonalisedCart/FallbackCartComponent/PageHeaderWithBackBtn';

type ProductPageComponentsTypes = {
  productPageComponents: WebsiteInterfaceTypes;
};

function ProductPageMaster({ productPageComponents }: ProductPageComponentsTypes) {
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
    stockAvailabilityData,
    userEnteredPinCode,
    getPincodesList,
    checkPinCodeExists,
    validPinCode,
  } = useProductDetail();
  // const {
  //   cartData,
  //   btnLoader,
  //   error,
  //   itemsUpdating,
  //   handleMainQuantityChange,
  //   handleQuantityChange,
  //   handleDeleteItem,
  //   quantity,
  //   handleAddToCart,
  // } = useCart();
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const SelectedLangDataFromStore: any = useSelector(SelectedFilterLangDataFromStore);
  useEffect(() => {
    if (Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0) {
      setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
    }
  }, [SelectedLangDataFromStore]);

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
      <div className={`col-md-7 ${esStyles.productImagesContainer}`}>
        <ESBreadCrumbs />
        <ImageGalleryMaster
          imageGalleryComponent={productPageComponents.magnified_image_component}
          slideShowImages={productDetailData.imgUrl ? productDetailData.imgUrl : []}
        />
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
            // cartData={cartData}
          />
        );
        break;
      }
      // case 'Fallback Product Information': {
      //   const foundCartGroup = cartData?.cart.find((group: any) => group.item_name === productDetailData?.OdDmCd);
      //   const matchedCartGroup = foundCartGroup ? [foundCartGroup] : [];
      //   const FallbackProductInformation =
      //     require('./ProductInformationComponents/FallbackProductInformation/FallbackProductInformation').default;
      //   infoCol = (
      //     <>
      //       <div className={`col-md-5 ${esStyles.productInfoContainer}`}>
      //         <FallbackProductInformation
      //           key="FallbackProductInformation"
      //           productDetailData={productDetailData}
      //           cartData={cartData}
      //           error={error}
      //           handleMainQuantityChange={handleMainQuantityChange}
      //           quantity={quantity}
      //           handleAddToCart={handleAddToCart}
      //           btnLoader={btnLoader}
      //         />
      //       </div>
      //       {matchedCartGroup?.length > 0 &&
      //         matchedCartGroup?.map((cartGroup: any, index: number) => (
      //           <div className={esStyles.productCartTableContainer}>
      //             <CartDetailsTable
      //               cartGroup={cartGroup}
      //               itemsUpdating={itemsUpdating}
      //               handleQuantityChange={handleQuantityChange}
      //               handleDeleteItem={handleDeleteItem}
      //             />
      //           </div>
      //         ))}
      //     </>
      //   );
      //   break;
      // }
    }

    return (
      <div className="row m-0 p-0">
        {imageCol}
        {infoCol}
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
