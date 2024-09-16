import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-bootstrap';
import { BsTwitterX } from 'react-icons/bs';
import { FaShareAlt, FaWhatsapp } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import useAddToCartHook from '../../hooks/CartPageHook/useAddToCart';
import styles from '../../styles/components/productDetail.module.scss';
const AddToCartBtn = dynamic(() => import('./AddToCartBtn'));
const CheckStockAvailability = dynamic(() => import('./CheckStockAvailability'));
const CheckStockAvailabilityBtn = dynamic(() => import('./CheckStockAvailabilityBtn'));
const ProductVariants = dynamic(() => import('./ProductVariants'));
const QuantityInputField = dynamic(() => import('./QuantityInputField'));
const StarRating = dynamic(() => import('./StarRating'));

const ProductDetailDescribtionSection = ({
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
}: any) => {
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const [quantityAlert, setQuantityAlert] = useState(false);
  const handleAddToSingleProductData = () => {
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
    addToCartItem(addToCartParams, null);
  };

  const handleAddMultipleProductData = () => {
    const addToCartParams = {
      currency: 'INR',
      item_list: itemList,
      party_name: getPartyName,
    };
    addToCartItem(addToCartParams, null);
  };

  return (
    <>
      <div className="border-bottom">
        <b className={`${styles.name}`}>{productDetailData?.item_name}</b>
        <div className="">{productDetailData?.rating && <StarRating rating={productDetailData?.rating} />}</div>
        <p className="mb-0">
          {selectedMultiLangData?.item_code}: {productDetailData?.name}
        </p>
        <div>
          <span className={`text-dark  ${styles.price}`}>{`₹ ${productDetailData?.price}`}</span>
          <del className={`text-dark ps-2 ${styles.price}`}>{`₹ ${productDetailData?.mrp_price}`}</del>
        </div>
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

        <Link href="#" className={` ${styles.priceOnReq}`}>
          {selectedMultiLangData?.price_on_request}
        </Link>
        <p className={`text-uppercase m-0 ${styles.detailSection}`}>
          {selectedMultiLangData?.brand} : <span> {productDetailData?.brand} </span>
        </p>
        <p className={`text-uppercase m-0 ${styles.detailSection}`}>
          {selectedMultiLangData?.hsn_code} : <span> {productDetailData?.gst_hsn_code} </span>
        </p>
      </div>
      <div>
        <ProductVariants productVariantData={productVariantData} />
        <CheckStockAvailability
          productVariantData={productVariantData}
          handleMultipleQtyChange={handleMultipleQtyChange}
          itemList={itemList}
          selectedMultiLangData={selectedMultiLangData}
        />
      </div>
      <div>
        {productVariantData?.length === 0 && (
          <>
            <p className={`my-1 ${styles.detailPriceSection}`}>
              {selectedMultiLangData?.sku_code} : <span>{productDetailData?.sku_code}</span>
            </p>
            <QuantityInputField
              productDetailData={productDetailData}
              qty={qty}
              handleQtyModificationOnInputEdit={handleQtyModificationOnInputEdit}
              handleQtyModificationOnButtonClick={handleQtyModificationOnButtonClick}
              selectedMultiLangData={selectedMultiLangData}
            />
          </>
        )}
        <p className="my-1">
          {selectedMultiLangData?.minimum_order_qty}:{' '}
          <span className={productDetailData?.min_order_qty > itemList[0]?.quantity ? 'text-danger' : 'text-success'}>
            {productDetailData?.min_order_qty}
          </span>
        </p>
        <div>
          {productVariantData?.length > 0 ? (
            <AddToCartBtn handleAddToCart={handleAddMultipleProductData} selectedMultiLangData={selectedMultiLangData} />
          ) : (
            <AddToCartBtn handleAddToCart={handleAddToSingleProductData} selectedMultiLangData={selectedMultiLangData} />
          )}
          <CheckStockAvailabilityBtn
            handleStockAvailabilityData={handleStockAvailabilityData}
            selectedMultiLangData={selectedMultiLangData}
          />
        </div>
        {quantityAlert && (
          <Fade in={quantityAlert}>
            <div id="example-fade-text" className="text-danger">
              {selectedMultiLangData?.minimum_order_qty} : {productDetailData?.min_order_qty}
            </div>
          </Fade>
        )}
        <div className="d-flex my-1 ">
          <div className="mx-2 my-1">
            <FaShareAlt fontSize={'20px'} />
          </div>

          <div className="mx-2 my-1">
            <a href={`https://wa.me/?text=${encodeURIComponent('Check this out!')}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp color="#25D366" fontSize={'20px'} />
            </a>
          </div>

          <div className="mx-2 my-1">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaSquareInstagram color="#C13584" fontSize={'20px'} />
            </a>
          </div>

          <div className="mx-2 my-1">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitterX fontSize={'20px'} />
            </a>
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="pincode" className="">
            Enter Your Pincode Below To Check the Delievry
          </label>
          <input className="d-block form-control w-50" id="pincode" value={pinCode} placeholder="Enter the Pincode" />
        </div>
      </div>
    </>
  );
};

export default ProductDetailDescribtionSection;
