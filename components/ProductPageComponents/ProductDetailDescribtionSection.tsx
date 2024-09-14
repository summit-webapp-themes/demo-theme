import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-bootstrap';
import { BsTwitterX } from 'react-icons/bs';
import { FaRegCheckCircle, FaShareAlt, FaWhatsapp, FaWindowClose } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import useAddToCartHook from '../../hooks/CartPageHook/useAddToCart';
import styles from '../../styles/components/productDetail.module.scss';
import CheckStockAvailability from './CheckStockAvailability';
import CheckStockAvailabilityBtn from './CheckStockAvailabilityBtn';
import ProductVariants from './ProductVariants';
import StarRating from './StarRating';

const ProductDetailDescribtionSection = ({ productDetailData, quantity, pinCode, handleQtyModificationOnInputEdit, productVariantData, handleStockAvailabilityData }: any) => {
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const [quantityAlert, setQuantityAlert] = useState(false);
  const [itemList, setItemList] = useState<any>([{
    item_code: '',
    quantity: productDetailData?.min_order_qty || 1
  }])
  const handleItemChange = (index: number, itemCode: string, value: string) => {
    setItemList((prevItemList: any) => {
      if (!Array.isArray(prevItemList)) {
        // Handle the case where prevItemList is not an array
        return [];
      }
      const updatedItemList = [...prevItemList];
      updatedItemList[index] = {
        ...updatedItemList[index],
        item_code: itemCode,
        quantity: value
      };
      return updatedItemList;
    });
  };
  const handleAddToProductData = () => {
    if (itemList[0]?.quantity < productDetailData?.min_order_qty) {
      setQuantityAlert(true);
      setTimeout(() => {
        setQuantityAlert(false);
      }, 3000);
      return;
    }
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
        <p className="mb-0">Item code: {productDetailData?.name}</p>
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
          Price on Request
        </Link>
        <p className={`text-uppercase m-0 ${styles.detailSection}`}>
          Brand : <span> {productDetailData?.brand} </span>
        </p>
        <p className={`text-uppercase m-0 ${styles.detailSection}`}>
          HSN code : <span> {productDetailData?.gst_hsn_code} </span>
        </p>
      </div>
      <div>
        <ProductVariants
          productVariantData={productVariantData} />
        <CheckStockAvailability productVariantData={productVariantData} quantity={quantity} handleQtyModificationOnInputEdit={handleItemChange} itemList={itemList} />
      </div>
      <div>
        <p className={`my-1 ${styles.detailPriceSection}`}>
          SKU CODE : <span>{productDetailData?.sku_code}</span>
        </p>
        <div className={`my-1 ${styles.detailPriceSection}`}>
          <label htmlFor="productQuantity">Quantity:</label>
          {productDetailData?.min_order_qty && (
            <input
              className={`ms-2 rounded-1 ${styles.input} ${styles.detailPriceSection}`}
              id="productQuantity"
              value={itemList[0]?.quantity}
              onChange={(e) => handleItemChange(0, productDetailData?.name, e.target.value)}
            />
          )}
        </div>

        <p className="my-1">
          Minimum Order Quantity:{' '}
          <span className={productDetailData?.min_order_qty > quantity ? 'text-danger' : 'text-success'}>
            {productDetailData?.min_order_qty}
          </span>
        </p>
        <div>
          <button onClick={handleAddToProductData} className={`border-0 px-5 py-2 rounded-1 my-3 ${styles.buttonBackGround}`}>
            Add to Cart
          </button>
          <CheckStockAvailabilityBtn handleStockAvailabilityData={handleStockAvailabilityData} quantity={itemList[0]?.quantity} />
        </div>
        {quantityAlert && (
          <Fade in={quantityAlert}>
            <div id="example-fade-text" className="text-danger">
              Minimum Order Quantiy is {productDetailData?.min_order_qty}
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
