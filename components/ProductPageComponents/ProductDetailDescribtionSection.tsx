import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Fade } from 'react-bootstrap';
import { BsTwitterX } from 'react-icons/bs';
import { FaCheckCircle, FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import useAddToCartHook from '../../hooks/CartPageHook/useAddToCart';
import styles from '../../styles/components/productDetail.module.scss';
import ProductActionButtonsMaster from './ProductActionButtons/ProductActionButtonsMaster';
import ProductDetailHeadingWithDescription from './ProductDetailHeadingWithDiscription';
import ProductPageVariants from './ProductPageVariants';
const AddToCartBtn = dynamic(() => import('./AddToCartBtn'));
const MultipleQuantityInputField = dynamic(() => import('./MultipleQuantityInputField'));
const CheckStockAvailabilityBtn = dynamic(() => import('./CheckStockAvailabilityBtn'));
const ProductVariants = dynamic(() => import('./ProductVariants'));
const QuantityInputField = dynamic(() => import('./QuantityInputField'));
const StarRating = dynamic(() => import('./StarRating'));

function ProductDetailDescribtionSection({
  productDetailData,
  pinCode,
  handleMultipleQtyChange,
  itemList,
  qty,
  handleQtyModificationOnInputEdit,
  productVariantData,
  handleStockAvailabilityData,
  handleQtyModificationOnButtonClick,
  selectedMultiLangData,
  cartData,
}: any) {
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const [quantityAlert, setQuantityAlert] = useState(false);
  const [addToCartLoaderBtn, setAddToCartLoaderBtn] = useState<boolean>(false);
  const [stockAvailabilityLoader, setStockAvailabilityLoader] = useState(false);
  const handleAddToSingleProductData = async () => {
    if (qty < productDetailData?.min_order_qty) {
      setQuantityAlert(true);
      setTimeout(() => {
        setQuantityAlert(false);
      }, 3000);
      return;
    }
    const addToCartParams = {
      currency: 'INR',
      item_list: [{ item_code: productDetailData?.name, quantity: qty }],
      party_name: getPartyName,
    };
    setAddToCartLoaderBtn(true);
    try {
      await addToCartItem(addToCartParams, null);
    } catch (error) {
      toast.error('Failed to add product to cart. Please try again.');
    } finally {
      setAddToCartLoaderBtn(false);
    }
  };

  const handleAddMultipleProductData = async () => {
    const addToCartParams = {
      currency: 'INR',
      item_list: itemList,
      party_name: getPartyName,
    };
    setAddToCartLoaderBtn(true);
    try {
      await addToCartItem(addToCartParams, null);
    } catch (error) {
      toast.error('');
    } finally {
      setAddToCartLoaderBtn(false);
    }
  };

  let cartProducts: any;
  const handleRenderBtnText = (handleData: any) => {
    {
      cartData?.length > 0 &&
        cartData?.map((item: any) => {
          if (item === productDetailData?.name) {
            cartProducts = item;
          }
        });
    }
    if (!cartProducts) {
      return (
        <AddToCartBtn handleAddToCart={handleData} selectedMultiLangData={selectedMultiLangData} addToCartLoaderBtn={addToCartLoaderBtn} />
      );
    } else {
      return (
        <button className={`border-0 px-5 py-2 rounded-1 my-3 ${styles.detail_page_btn}`} style={{ background: '#184f2f', color: '#fff' }}>
          {addToCartLoaderBtn ? <FaCheckCircle className={`mb-1`} /> : <>Added to cart</>}
        </button>
      );
    }
  };

  return (
    <>
      <div className="">
        <ProductDetailHeadingWithDescription productDetailData={productDetailData} />
        {Array.isArray(productDetailData?.features)
          ? ''
          : productDetailData?.features &&
            Object?.keys(productDetailData?.features)?.length > 0 && (
              <div className="mt-2">
                <ul>
                  {productDetailData?.features?.values?.length > 0
                    ? productDetailData?.features?.values?.map((item: any, index: any) => (
                        <li key={index} className={`${styles.features} my-1`}>
                          {item?.description}
                        </li>
                      ))
                    : ''}
                </ul>
              </div>
            )}
      </div>
      <div>
        <ProductPageVariants productVariantData={productVariantData} />
      </div>
      <div>
        <ProductActionButtonsMaster
          qty={qty}
          handleQtyModificationOnInputEdit={handleQtyModificationOnInputEdit}
          handleQtyModificationOnButtonClick={handleQtyModificationOnButtonClick}
          handleAddToSingleProductData={handleAddToSingleProductData}
          addToCartLoaderBtn={addToCartLoaderBtn}
        />
        <div className="py-3">
          <div>
            <span className="text-secondary">Availability</span>:{' '}
            {productDetailData?.in_stock_status === true ? 'In Stock' : 'Out of Stock'}
          </div>
          <div>
            <span className="text-secondary">Categories</span> : {productDetailData?.category}
          </div>
          {productDetailData?.display_tag?.length > 0 && (
            <div>
              <span className="text-secondary">Tags</span> : {productDetailData?.display_tag?.map((tag: string) => tag)}
            </div>
          )}
        </div>
        {quantityAlert && (
          <Fade in={quantityAlert}>
            <div id="example-fade-text" className="text-danger">
              {selectedMultiLangData?.minimum_order_qty} : {productDetailData?.min_order_qty}
            </div>
          </Fade>
        )}
        <div className="d-flex my-3 ">
          <div className="me-3 my-1">
            <FaShareAlt fontSize={'20px'} />
          </div>

          <div className="me-3 my-1">
            <a href={`https://wa.me/?text=${encodeURIComponent('Check this out!')}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color="#25D366" fontSize={'20px'} />
            </a>
          </div>

          <div className="me-3 my-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram color="#C13584" fontSize={'20px'} />
            </a>
          </div>

          <div className="me-3 my-1">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX fontSize={'20px'} />
            </a>
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="pincode" className="">
            Enter Your Pincode Below To Check the Delivery
          </label>
          <input className="d-block form-control w-auto" id="pincode" defaultValue={pinCode} placeholder="Enter the Pincode" />
        </div>
      </div>
    </>
  );
}

export default ProductDetailDescribtionSection;
