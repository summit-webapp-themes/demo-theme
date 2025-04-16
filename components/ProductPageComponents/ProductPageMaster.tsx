import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { WebsiteInterfaceTypes } from '../../interfaces/website-interface-types';
import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
import ImageGalleryMaster from './ProductImageGallery/ImageGalleryMaster';
import ProductDetailDescribtionSection from './ProductDetailDescribtionSection';
import ProductDetailSkeleton from './ProductDetailSkeleton';
import styles from '../../styles/components/productDetail.module.scss';
import ProductDetails from './EurProductDetail/EurProductDetail';
import CartTable from './EurProductDetail/CartTable';

type ProductPageComponentsTypes = {
  productPageComponents: WebsiteInterfaceTypes;
};

function ProductPageMaster({ productPageComponents }: ProductPageComponentsTypes) {
  const [cart, setCart] = useState<any[]>([]);
  const handleCartQuantityChange = (itemIndex: any, delta: any) => {
    setCart((prevCart) =>
      prevCart.map((item, idx) =>
        idx === itemIndex
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
              total: item.unitPrice * Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };
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
  const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
  const cartData = useSelector(selectCart).items;
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

  const renderImageComponent = () => {
    if (productPageComponents?.magnified_image_component && productDetailData?.slide_img) {
      return (
        <div className="col-md-6 p-4 h-100">
          <ImageGalleryMaster
            imageGalleryComponent={productPageComponents?.magnified_image_component}
            slideShowImages={productDetailData.slide_img}
          />
        </div>
      );
    }
    return null;
  };

  const renderProductDetailComponent = () => {
    if (productPageComponents?.product_information_component === 'Standard Product Information') {
      return (
        <div className="col-md-6 p-4">
          <ProductDetails cart={cart} setCart={setCart} />
        </div>
      );
    }
    return null;
  };

  const renderProductInformationComponents = () => {
    return (
      <>
        {renderImageComponent()}
        {renderProductDetailComponent()}
      </>
    );
  };

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

  if (Object?.keys(productDetailData)?.length > 0) {
    return (
      <div className={`container-fluid ${styles.detailContainer} w-100 ps-lg-5 pe-lg-4 `}>
        {renderHeaderComponents()}
        <div className="row">
          {renderProductInformationComponents()}
          {renderProductPageBottomSectionComponents()}
          {/* Cart Summary */}
          <div style={{ marginTop: window.innerWidth < 768 ? '7rem' : '3rem' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex gap-3 align-items-center">
                {/* <img
              src="https://picsum.photos/200/200"
              alt="Side 1"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', height: '30px', width: '40px' }}
            /> */}
                <h5 className="fw-bold">Your Cart for Jy-2025-001</h5>
              </div>

              <h6 className="fw-bold mb-0">Subtotal: €{cart.reduce((acc, item) => acc + (Number(item.total) || 0), 0).toFixed(2)}</h6>
            </div>

            <CartTable cart={cart} handleCartQuantityChange={handleCartQuantityChange} />
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

export default ProductPageMaster;
