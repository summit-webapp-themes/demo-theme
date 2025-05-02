import { useSelector } from 'react-redux';
import { WebsiteInterfaceTypes } from '../../interfaces/website-interface-types';
import useProductDetail from '../../hooks/ProductDetailPageHooks/useProductDetail';
import { selectCart } from '../../store/slices/cart-slices/cart-local-slice';
import styles from '../../styles/components/productPageV2Components.module.scss';
import ProductDetails from './ProductPageV2/ProductDetails';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import ImageGallery from './ProductPageV2/ImageGallery';
import { useState } from 'react';
import Image from 'next/image';
import noImage from '../../public/assets/images/no_image.png';
import CartDetailsTable from './ProductPageV2/CartDetailsTable';

export default function ProductPageV2({ productPageComponents }: { productPageComponents: WebsiteInterfaceTypes}) {
  const [cart, setCart] = useState<any[]>([]);
  const {
    productDetailData,
    errorMessage,
  } = useProductDetail();
  const cartData = useSelector(selectCart).items;

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
        <div className="col-md-7 px-4 h-100">
          <ImageGallery />
        </div>
      );
    }
    return null;
  };

  const renderProductDetailComponent = () => {
    if (productPageComponents?.product_information_component === 'Standard Product Information') {
      return (
        <div className="col-md-5 px-4">
          <ProductDetails productDetailData={productDetailData} cartData={cartData} cart={cart} setCart={setCart} />
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

  if (Object?.keys(productDetailData)?.length > 0) {
    return (
      <div className="w-100 ps-lg-5 pe-lg-4" >
        {renderHeaderComponents()}
        <div className="container-fluid">
          <Link href="/product-category/" className="d-flex align-items-center text-decoration-none text-black">
            <IoIosArrowBack className="me-2 m-0 h4 fw-bold" />
            <h5 className="fw-bold mb-0">Product Details</h5>
          </Link>
          <div className="row mt-4">
            {renderProductInformationComponents()}
          </div>
          <div className="my-5">
            <div className='d-flex align-items-center justify-content-start gap-4'>
              <div style={{ position: 'relative', width: '66px', height: '66px', borderRadius: '10px', overflow: 'hidden'}}>
                <Image src={noImage} alt="Ring Image" className=' object-fit-cover' fill />
              </div>
              <p className={`m-0 fw-bold ${styles.cartTableHeading}`}>Your Cart for - JY-2025-001</p>
            </div>
            {/* <CartDetailsTable /> */}
            <div className="text-end">
              <button className={`btn btn-outline ${styles.viewCartButton}`}>
                View Cart
              </button>
            </div>
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